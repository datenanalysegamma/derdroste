<template>
    <div class="characteristics-page">
        <section-skew :first-of="true" :text="'Du kannst die Zettel abreissen, indem du sie nach unten ziehst!'"></section-skew>
        <div class="wrapper">
            <div class="characteristics">
                <div class="clipboard">
                    <svg v-swipe-down="rip">
                        <use xlink:href="../../assets/clipboard.svg#clip">
                        </use>
                    </svg>
                </div>
                <transition name="rip">
                    <template v-for="(item, index) in items">
                        <div v-if="index === iterator" class="paper" :key="item.id">
                            <div class="content">
                        <span :class="[{'title': iterator === 0}, {'subtitle': iterator > 0}]">
                            <img v-if="item.imageUrl" :src="item.imageUrl" alt="#">
                            {{item.title}}
                        </span>
                                <ul>
                                    <template v-for="listItem in item.listItems">
                                        <li :key="listItem.id">
                                            <span><strong>{{listItem.title}} </strong></span>
                                            <span>{{listItem.text}}</span>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </template>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import { Papers } from '../../mixins/Papers'
    import SectionSkew from "../ui/SectionSkew";

    export default {
        name: "Index",
        components: {SectionSkew},
        mixins: [
            Papers
        ],
        data () {
            return {
                iterator: 0
            }
        },
        methods: {
            rip () {
                if (this.iterator < this.items.length) {
                    this.iterator++
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .characteristics-page {
        .wrapper {
            width: 100%;
            display: flex;
            justify-content: center;

            .characteristics {
                position: relative;
                width: 260px;
                height: 400px;
                display: flex;
                justify-content: center;

                @media (min-width: 359px) {
                    width: 300px;
                    height: 440px;
                }
                @media (min-width: 439px) {
                    width: 380px;
                    height: 500px;
                }
                @media (min-width: 767px) {
                    width: 700px;
                    height: 840px;
                }
                @media (min-width: 1439px) {
                    width: 1380px;
                    height: 1100px;
                }
                @media (min-width: 1599px) {
                    height: 1400px;
                }

                .clipboard {
                    position: relative;
                    z-index: 1;
                    width: 100%;

                    svg {
                        height: 100%;
                        width: 100%;
                        fill: var(--main-bar-color);
                        transform: scale(1.3);
                    }

                    &::before {
                        left: 0;
                    }

                    &::after {
                        right: 0;
                    }
                }

                .paper {
                    z-index: -1;
                    position: absolute;
                    top: 70px;
                    left: 25px;
                    width: 200px;
                    height: 280px;
                    background: var(--navigation-mobile-color);
                    border: 5px solid var(--main-bar-color);
                    border-radius: 5px;
                    filter: brightness(1.1);

                    @media (min-width: 359px) {
                        top: 65px;
                        left: 30px;
                        width: 230px;
                        height: 330px;
                    }
                    @media (min-width: 439px) {
                        top: 55px;
                        left: 35px;
                        width: 300px;
                        height: 420px;
                    }
                    @media (min-width: 767px) {
                        top: 135px;
                        left: 55px;
                        width: 420px;
                        height: 600px;
                        border: 10px solid var(--main-bar-color);
                        border-radius: 10px;
                    }
                    @media (min-width: 1439px) {
                        left: 65px;
                        width: 640px;
                        height: 880px;
                        border: 15px solid var(--main-bar-color);
                        border-radius: 15px;
                    }
                    @media (min-width: 1599px) {
                        top: 165px;
                        left: 65px;
                        width: 840px;
                        height: 1120px;
                        border: 20px solid var(--main-bar-color);
                        border-radius: 20px;
                    }

                    .content {
                        padding: 15px 10px;

                        @media (min-width: 359px) {
                            padding: 20px 15px;
                        }
                        @media (min-width: 439px) {
                            padding: 25px 20px;
                        }
                        @media (min-width: 767px) {
                            padding: 40px 30px;
                        }
                        @media (min-width: 1439px) {
                            padding: 60px 50px;
                        }
                        @media (min-width: 1599px) {
                            padding: 80px 80px;
                        }

                        span {
                            color: var(--main-bar-color);
                            font-size: 14px;
                            line-height: 1.3;
                            display: block;

                            @media (min-width: 359px) {
                                font-size: 18px;
                            }
                            @media (min-width: 439px) {
                                font-size: 22px;
                            }
                            @media (min-width: 767px) {
                                font-size: 32px;
                            }
                            @media (min-width: 1439px) {
                                font-size: 46px;
                            }
                            @media (min-width: 1599px) {
                                font-size: 54px;
                            }
                        }

                        ul {
                            display: block;
                            padding: 0;
                            margin: 0;

                            @media (min-width: 439px) {
                                margin: 10px 0;
                            }
                            @media (min-width: 1439px) {
                                margin: 20px 0;
                            }
                            @media (min-width: 1599px) {

                            }

                            li {
                                list-style: none;
                            }
                        }

                        img {
                            border: 2px solid var(--main-bar-color);
                            border-radius: 3px;
                            height: 100px;
                            width: auto;

                            @media (min-width: 439px) {
                                height: 120px;
                            }
                            @media (min-width: 767px) {
                                border: 3px solid var(--main-bar-color);
                                border-radius: 5px;
                                height: 160px;
                            }
                            @media (min-width: 1439px) {
                                height: 240px;
                            }
                            @media (min-width: 1599px) {
                                border: 4px solid var(--main-bar-color);
                                border-radius: 6px;
                                height: 300px;
                            }
                        }

                        .title {
                            font-size: 46px;
                            font-weight: 900;
                            line-height: 50px;

                            @media (min-width: 359px) {
                                font-size: 56px;
                            }
                            @media (min-width: 439px) {
                                font-size: 66px;
                            }
                            @media (min-width: 767px) {
                                font-size: 78px;
                            }
                            @media (min-width: 1439px) {
                                font-size: 100px;
                            }
                            @media (min-width: 1599px) {
                                font-size: 140px;
                            }
                        }

                        .subtitle {
                            font-weight: 900;
                        }
                    }
                }
            }
        }

        .rip-enter-active {
            transition: opacity .2s;
        }

        .rip-leave-active {
            transition: transform .8s;
        }

        .rip-enter {
            opacity: 0;
        }

        .rip-leave-to {
            transform: translateY(100vh);
            z-index: 2 !important;
        }

        p:first-of-type:first-letter {
            font-size: 58px;
            float: left;
            margin: -15px 6px 0 -3px;
            font-weight: 900;
            color: var(--main-bar-color)
        }
        .section-skew {
            margin-bottom: 20px;
        }
    }
</style>
