<template>
    <div class="characteristics-page">
        <section-skew :first-of="true" :text="'Du kannst die Zettel abreissen, indem du sie nach unten ziehst!'"></section-skew>
        <div class="wrapper">
            <div class="characteristics">
                <div class="clipboard">
                    <svg v-swipe-down="rip">
                        <use xlink:href="../../assets/clipboard.svg#clipboard">
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
            padding: 15px 0 15px;

            .characteristics {
                position: relative;
                width: fit-content;

                .clipboard {
                    position: relative;
                    z-index: 1;

                    svg {
                        height: auto;
                        width: 100%;
                        fill: var(--main-bar-color);
                    }

                    &::before,
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        z-index: 999;
                        background-color: transparent;
                        height: 100%;
                        width: 78px;
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
                    top: 50px;
                    left: 73px;
                    width: 210px;
                    height: 290px;
                    background: var(--navigation-mobile-color);
                    border: 5px solid var(--main-bar-color);
                    border-radius: 5px;
                    filter: brightness(1.1);

                    .content {
                        padding: 10px;

                        span {
                            color: var(--main-bar-color);
                        }

                        ul {
                            padding: 0;
                            margin: 0;

                            li {
                                list-style: none;
                                margin: 5px 0;
                            }
                        }

                        img {
                            border: 2px solid var(--main-bar-color);
                            border-radius: 3px;
                            height: 100px;
                            width: auto;
                        }

                        .title {
                            font-size: 50px;
                            font-weight: 900;
                            line-height: 50px;
                        }

                        .subtitle {
                            font-size: 24px;
                            font-weight: 900;
                            line-height: 50px;
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
