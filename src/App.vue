<template>
  <div :class="appState">
    <Navigation></Navigation>
    <main class="page-main">
      <transition
        :name="transitionName"
        mode="out-in">
          <router-view/>
      </transition>
    </main>
    <player></player>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Player from "./components/Player";
import {store} from "./store/Store";

const DEFAULT_TRANSITION = 'fade';

export default {
  name: 'App',
  data () {
    return {
      transitionName:  DEFAULT_TRANSITION
    }
  },
  components: {
    Player,
    Navigation,
    Footer
  },
  computed: {
    appState () {
      return store.state.app
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

       if (transitionName === 'slide') {
          const toDepth = to.path.split('/').length;
          const fromDepth = from.path.split('/').length;
          transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
       }
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  }
}
</script>

<style lang="scss">
  @import './assets/variables';

  body {
    margin: 0;
  }

  span,
  p,
  a,
  li,
  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4 {
    font-family: var(--font), Roboto, Helvetica ,sans-serif;
    letter-spacing: var(--spacing);
    color: var(--navigation-primary-color);
    line-height: 1.3;
  }

  h1, .h1 {
    color: var(--main-bar-color);
    font-size: 34px;
    font-weight: 900;
    margin-bottom: 30px;

    @media (min-width: 767px) {
      font-size: 38px;
    }
    @media (min-width: 1024px) {
      font-size: 40px;
    }
    @media (min-width: 1439px) {
      font-size: 42px;
    }
  }

  h2, .h2 {
    color: var(--main-bar-color);
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 24px;

    @media (min-width: 767px) {
      font-size: 32px;
    }
    @media (min-width: 1024px) {
      font-size: 34px;
    }
    @media (min-width: 1439px) {
      font-size: 36px;
    }
  }

  p, .p,
  a, .a,
  li, .li,
  span, .span {
    font-size: 18px;

    @media (min-width: 767px) {
      font-size: 22px;
    }
    @media (min-width: 1024px) {
      font-size: 24px;
    }
    @media (min-width: 1439px) {
      font-size: 26px;
    }
  }

  p {
    margin-bottom: 20px;
  }

  .page-main {
    margin: var(--main-bar-sm-height) auto 20px;
    max-width: 300px;
    padding: 15px 30px;

    @media (min-width: 439px) {
      max-width: 400px;
      margin: var(--main-bar-sm-height) auto 40px;
    }
    @media (min-width: 767px) {
      margin: var(--main-bar-sm-height) auto 60px;
      max-width: 550px;
    }
    @media (min-width: 1024px) {
      margin: var(--main-bar-sm-height) auto 70px;
    }
    @media (min-width: 1439px) {
      margin: var(--main-bar-sm-height) auto 80px;
      max-width: 800px;
    }
    @media (min-width: 1599px) {
      margin: var(--main-bar-sm-height) auto 100px;
      max-width: 1024px;
    }
  }

  .text-center {
    text-align: center;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(-100vw, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-100vw, 0);
  }

  .anchor {


    @keyframes stumble {
      0% {transform: translateX(-100vw);}
      40% {transform: translateX(0) rotate(3deg);}
      60% {transform: rotate(-3deg);}
      80% {transform: rotate(1deg);}
      90% {transform: rotate(-1deg);}
      100% {transform: rotate(0);}
    }
  }
</style>
