<template>
    <header class="header">
        <div class="menu-toggle" :class="{'is-active': flyOut}" @click="toggleMenu">
            <svg>
                <use xlink:href="@/assets/gear-alt.svg#gear-alt"></use>
            </svg>
        </div>
        <div class="main-bar" :class="{'is-active': flyOut}">
            <div class="headline" :class="{'is-active': flyOut}">
                <span>Dr <span>
                    <transition name="fade" mode="out-in">
                    </transition>
                    <svg v-if="appState === 'home'">
                         <use xlink:href="../assets/gear.svg#home">
                        </use>
                    </svg>
                    <svg v-if="appState === 'city'">
                         <use xlink:href="../assets/ride.svg#city">
                        </use>
                    </svg>
                </span> ste</span>
            </div>
        </div>
        <nav class="navigation" :class="{'is-active': flyOut}">
            <div class="overlay-left"></div>
            <div class="overlay-right"></div>
            <div class="menu">
                <ul>
                    <template v-for="link in items">
                        <li :key="link.id">
                            <a href="#" @click="push(link.url, $event)" :class="{'is-active': link.url === $route.path}">{{link.title}}</a>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="contact">
                <ul>
                    <template v-for="contactLink in contactLinks">
                        <li :key="contactLink.id">
                            <a :href="contactLink.link">
                                <svg>
                                    <use :xlink:href="contactLink.svg"></use>
                                </svg>
                                {{contactLink.title}}
                            </a>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import { Links } from '../mixins/Links'
    import {store} from "../store/Store";

    export default {
        name: "Navigation",
        mixins: [
            Links
        ],
        data () {
            return {
                flyOut: false,
                scrolled: false,
                contactLinks: [
                    {
                        id: 0,
                        title: '015752238408',
                        link: '#',
                        svg: ''
                    },
                    {
                        id: 1,
                        title: 'dr.oste129@gmail.com',
                        link: '#',
                        svg: ''
                    }
                ]
            }
        },
        methods: {
            toggleMenu () {
                this.flyOut = !this.flyOut;
            },
            push (url, $event) {
                $event.preventDefault();
                if (this.$route.path !== url) {
                    this.flyOut = false;
                    this.$router.push(url)
                }
            }
        },
        computed: {
            appState () {
                return store.state.app
            }
        }
    }
</script>

<style lang="scss" scoped>
  .header {
      z-index: 999;

      .menu-toggle {
          z-index: 1000;
          position: absolute;
          top: 10px;
          right: 15px;
          height: 30px;
          width: 30px;
          cursor: pointer;

          @media (min-width: 1023px) {
              top: 20px;
              right: 30px;
              height: 60px;
              width: 60px;
          }

          @media (min-width: 1439px) {
              top: 40px;
              right: 60px;
              height: 120px;
              width: 120px;
          }

          svg {
              fill: var(--navigation-mobile-color);
              width: 30px;
              height: 30px;
              transition: transform var(--navigation-transition);
              transition-delay: 1s;
              @media (min-width: 1023px) {
                  height: 60px;
                  width: 60px;
              }
              @media (min-width: 1439px) {
                  height: 80px;
                  width: 80px;
              }
          }

          &.is-active {
              position: fixed;

              svg {
                  transform: rotate(335deg);
                  transition: transform var(--navigation-transition);
              }
          }
      }

      .main-bar {
          z-index: 998;
          position: absolute;
          top: 0;
          left: 0;
          height: var(--main-bar-sm-height);
          width: 100%;
          background: var(--main-bar-bg);
          background-size: cover;
          overflow: hidden;

          @media(min-width: 1023px) {
              background-size: 50%, 100%;
          }

          &::before {
              z-index: 2;
              content: '';
              position: absolute;
              bottom: var(--main-bar-skew-position);
              left: 0;
              height: var(--main-bar-skew-height);
              width: calc(100% + 12px);
              background: rgb(255,255,255);
              transform: rotate(-3deg);

          }

          .headline {
              z-index: 997;
              padding: var(--headline-padding) 0 0;
              height: 100%;
              width: 100%;
              overflow: hidden;
              text-align: center;

              span {
                  display: inline-block;
                  font-family: var(--font), Helvetica, sans-serif;
                  font-weight: 900;
                  font-size: var(--headline-font-size);
                  color: var(--navigation-mobile-color);
                  padding: calc(var(--main-bar-sm-height) / 4.7) calc(var(--main-bar-sm-height) / 4.7) 0;
                  letter-spacing: var(--spacing);

                  span {
                      position: relative;
                      display: inline-block;
                      height: calc(var(--main-bar-sm-height) / 3.5);
                      width: var(--main-bar-svg-size);
                      padding: 0;
                      vertical-align: middle;
                  }
              }

              svg {
                  position: absolute;
                  top: calc(50% - calc(var(--main-bar-svg-size) / 2) + (var(--main-bar-svg-size) / 14));
                  left: calc(50% - calc(var(--main-bar-svg-size) / 2));
                  height: var(--main-bar-svg-size);
                  width: var(--main-bar-svg-size);
                  animation: spin 25s infinite;
                  animation-delay: 2s;
                  fill: var(--navigation-mobile-color);
              }

              @keyframes spin {
                  0% {transform:rotate(0deg);}
                  75% {transform:rotate(359deg);}
                  100% {transform:rotate(359deg);}
              }
          }
      }

      .navigation {
          z-index: 998;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .overlay-left,
          .overlay-right {
              z-index: 1;
              position: fixed;
              top: 0;
              height: calc(100vh + 10px);
              width: calc(80vw + 2px);
              transition: transform var(--navigation-transition), opacity var(--navigation-transition);
              transition-delay: 1s;
              opacity: .1;
          }

          .overlay-left {
              left: -80vw;
              background-color: var(--navigation-primary-color);
          }

          .overlay-right {
              right: -80vw;
              background-color: var(--navigation-secondary-color);
          }

          .menu,
          .contact {
              z-index: 2;
              position: fixed;
              transform: translateX(100vw);
              transition-delay: 1s;
          }

          .menu {
              top: 5vh;

              @media(min-width: 1023px) {
                  top: calc(5vh + 30px);
              }

              @media(min-width: 1023px) {
                  top: calc(5vh + 90px);
              }
          }

          .contact {
              left: 0;
              top: calc(100vh - 156px);
              width: 100%;
              text-align: center;

              @media (min-width: 1023px) {
                  top: calc(100vh - 186px);
              }

              ul {

                  li {
                      transform: translate3d(0,40px,0);
                      margin: 15px 0;
                      opacity: 0;
                      transition: opacity var(--navigation-transition), transform var(--navigation-transition);

                      a {
                          display: inline-block;
                          height: 20px;
                          font-size: var(--contact-font-size);
                      }

                      svg {
                          display: none;
                      }

                      $contact-list: .12s, .24s;

                      @for $i from 2 through 1 {
                          &:nth-last-child(#{$i}) {
                              transition-delay: nth($contact-list, $i);
                          }
                      }
                  }
              }
          }

          ul {
              padding: 0;
              text-align: center;

              li {
                  transform: translate3d(0,40px,0);
                  list-style: none;
                  margin: 25px 0;
                  opacity: 0;
                  transition: opacity var(--navigation-transition), transform var(--navigation-transition);

                  a {
                      color: var(--navigation-mobile-color);
                      text-decoration: none;
                      font-weight: 700;
                      font-size: var(--menu-font-size);

                      &.is-active {
                          filter: brightness(.5);
                      }
                  }

                  $list: .36s, .48s, .6s, .72s, .84s;

                  @for $i from 5 through 1 {
                      &:nth-last-child(#{$i}) {
                          transition-delay: nth($list, $i);
                      }
                  }
              }
          }

          &.is-active {
              z-index: 999;

              .overlay-left,
              .overlay-right {
                  opacity: 1;
                  transition: transform var(--navigation-transition), opacity var(--navigation-transition);
              }

              .overlay-left {
                  transform: translateX(50vw) skew(-15deg);
              }

              .overlay-right {
                  transform: translateX(-50vw) skew(-15deg);
              }

              .menu,
              .contact {
                  transform: translateX(0);
                  transition: transform;
                  transition-delay: 0s;
              }


              .contact {

                  ul {

                      li {
                          transform: translate3d(0,0,0);
                          opacity: 1;
                          transition: opacity var(--navigation-transition), margin var(--navigation-transition);

                          @for $i from 1 through 2 {
                              &:nth-child(#{$i}n) {
                                  transition-delay: 0.9s + (($i * .6) * 0.3s);
                              }
                          }
                      }
                  }
              }

              ul {

                  li {
                      transform: translate3d(0,0,0);
                      opacity: 1;
                      transition: opacity var(--navigation-transition), transform var(--navigation-transition);

                      @for $i from 1 through 5 {
                          &:nth-child(#{$i}n) {
                              transition-delay: ($i * .6) * 0.3s;
                          }
                      }
                  }
              }
          }
      }
  }
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s, transform .5s;
  }
  .fade-enter, .fade-leave-to {
      opacity: 0;
      transform: translateX(-100vw);
  }
</style>
