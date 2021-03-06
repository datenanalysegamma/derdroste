<template>
    <div v-swipe-left="rotateSliderLeft" v-swipe-right="rotateSliderRight" class="techstack">
        <div class="container">
            <div class="slider" :style="'transform: rotateY(' + curveSlider + 'deg)'">
                <template v-for="stack in stacks">
                    <div class="stack"
                         :key="stack.id"
                         :style="'transform: rotateY(' + (stack.id * getDegree) + 'deg) translateZ(' + getDegree * imageMargin + 'px);'">
                        <div
                            class="stack-wrapper"
                            :class="{'is-active': activeDescription === stack.id}">
                            <img draggable="false" :src="stack.url" alt="#">
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="text-center description">
            <transition name="fade" mode="out-in" >
                <template v-for="stack in stacks">
                    <div v-if="activeDescription === stack.id" :key="stack.id">
                        <p>{{stack.type}}:</p>
                        <h2>{{stack.title}}</h2>
                    </div>
                </template>
            </transition>
        </div>
    </div>
</template>

<script>
    import { Stacks } from "../../mixins/Stacks";

    export default {
        name: "TechSlider",
        mixins: [
            Stacks
        ],
        data () {
            return {
                curveSlider: 0,
                activeDescription: 0,
                imageMargin: 12
            }
        },
        methods: {
            rotateSliderLeft () {
                this.curveSlider = this.curveSlider - this.getDegree;
                if (this.activeDescription !== this.stacks.length -1) {
                    this.activeDescription++
                } else {
                    this.activeDescription = 0
                }
            },
            rotateSliderRight () {
                this.curveSlider = this.curveSlider + this.getDegree;
                if (this.activeDescription !== 0) {
                    this.activeDescription--
                } else {
                    this.activeDescription = this.stacks.length - 1
                }
            }
        },
        computed: {
            getDegree () {
                const deg = 360 / this.stacks.length;
                return deg
            }
        },
        created() {
           if (window.innerWidth > 1023) {
               this.imageMargin = 24
           }
        }
    }
</script>

<style lang="scss" scoped>
    .techstack {
        margin: 60px 0;

        .container {
            margin: 0 auto;
            width: 100%;
            height: 100px;
            position: relative;
            perspective: 1000px;
            overflow: hidden;

            @media (min-width: 1024px) {
                height: 240px;
            }

            .slider {
                height: 100%;
                width: 100%;
                position: absolute;
                transform-style: preserve-3d;
                transition: transform .7s;

                .stack {
                    display: block;
                    position: absolute;
                    top: calc(50% - 25px);
                    left: calc(50% - 25px);

                    .stack-wrapper {
                        position: relative;
                        transition: transform .7s;

                        &.is-active {
                            transform: scale(1.2);
                            transition: transform .7s;
                        }

                        &::before {
                            content: '';
                            top: -10px;
                            left: -15px;
                            position: absolute;
                            width: 75px;
                            height: 70px;
                            background: rgb(255,255,255);
                            background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6250875350140056) 48%, rgba(255,255,255,0) 100%);
                            z-index: -1;

                            @media (min-width: 1024px) {
                                width: 120px;
                                height: 120px;
                            }
                        }

                        img {
                            width: 50px;
                            height: auto;
                            display: block;

                            @media (min-width: 1024px) {
                                width: 80px;
                            }
                        }

                    }
                }
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .description {
        p {
            margin: 15px 0 5px;
            font-size: 16px;
            color: var(--main-bar-color);

            @media (min-width: 1024px) {
                margin: 20px;
                font-size: 24px;
            }
        }

        h2 {
            margin: 0;
            font-size: 24px;

            @media (min-width: 1024px) {
                font-size: 32px;

            }
        }

        @media (min-width: 1024px) {
            margin-left: 35px;
        }
    }
</style>
