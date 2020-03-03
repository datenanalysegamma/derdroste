<template>
    <div class="wrapper">
        <div class="section-skew" :class="{'first-of': firstOf}">
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SectionSkew",
        props: {
            text: {String, required: true},
            firstOf: {Boolean, required: true}
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        overflow: hidden;
        width: fit-content;
        margin: 5px 0;

        .section-skew {
            z-index: 1;
            position: relative;
            background-color: var(--section-bg);
            border: 2px solid var(--navigation-mobile-color);
            width: calc(100% - 54px);
            height: 100%;
            padding: 40px 25px;
            text-align: left;

            @media (min-width: 767px) {
                padding: 60px 35px;
                width: calc(100% - 75px);
            }
            @media (min-width: 1023px) {
                padding: 80px 50px;
                width: calc(100% - 104px);
            }
            @media (min-width: 1439px) {
                padding: 100px 70px;
                width: calc(100% - 144px);
            }

            &::before,
            &::after {
                z-index: 2;
                content: '';
                position: absolute;
                height: 35px;
                width: calc(100% + 10px);
                background-color: white;
                transform: rotate(-3deg);

                @media (min-width: 1023px) {
                    height: 55px;
                }
                @media (min-width: 1439px) {
                }
            }

            &::before {
                bottom: -20px;
                left: -3px;
                border-top: 2px solid var(--navigation-mobile-color);

                @media (min-width: 1023px) {
                    bottom: -30px;
                }
            }

            &::after {
                top: -20px;
                left: -5px;
                border-bottom: 2px solid var(--navigation-mobile-color);

                @media (min-width: 1023px) {
                    top: -30px;
                }
            }

            &.first-of {
                p {
                    line-height: 28px;
                }

                > p:first-of-type:first-letter {
                    font-weight: 900;
                    color: var(--main-bar-color);
                    float: left;
                    margin: -0px 6px -10px -3px;
                    font-size: 60px;
                    line-height: 60px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
