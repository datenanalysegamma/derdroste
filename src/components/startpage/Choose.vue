<template>
    <div class="choose">
        <Section first-of="true" :text="'Was genau interessiert dich denn?'"></Section>
        <ul>
            <template v-for="item in items.slice(1)">
                <li class="anchor" :key="item.id">
                    <router-link :to="item.url">
                        {{item.title}}
                    </router-link>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
    import { Links } from '../../mixins/Links'
    import Section from "../ui/Section";

    export default {
        name: "Choose",
        components: {Section},
        mixins: [
            Links
        ]
    }
</script>

<style lang="scss" scoped>
    .choose {
        width: 100%;

        ul {
            padding: 10px 0;
        }

        .anchor {
            position: relative;
            list-style: none;
            background-color: var(--main-bar-color);
            text-align: center;
            width: calc(100% - 20px);
            margin: 15px 0;
            transform: rotate(-3deg) translateX(-100vw);
            animation: stumble .5s forwards;

            @media (min-width: 767px) {
                margin: 20px 0;
            }
            @media (min-width: 1024px) {
                margin: 30px 0;
            }
            @media (min-width: 1439px) {
                margin: 40px 0;
            }

            &::before,
            &::after {
                content: '';
                position: absolute;
                background-color: white;
                height: 80px;
                width: 15px;
                transform: rotate(3deg);

                @media (min-width: 1024px) {
                    height: 105px;
                }

                @media (min-width: 1439px) {
                    height: 130px;
                }
            }

            &::before {
                top: -3px;
                left: -8px;
            }

            &::after {
                top: 0;
                right: -8px;
            }

            a {
                padding: 15px 0;
                display: block;
                width: 100%;
                text-decoration: none;
                color: var(--navigation-mobile-color);
                font-size: 24px;
                font-weight: 900;
                filter: brightness(1.1);

                @media (min-width: 767px) {
                    padding: 20px 0;
                    font-size: 28px;
                }
                @media (min-width: 1024px) {
                    padding: 30px 0;
                    font-size: 32px;
                }
                @media (min-width: 1439px) {
                    padding: 40px 0;
                    font-size: 36px;
                }
            }

            @for $i from 1 through 5 {
                &:nth-child(#{$i}n) {
                    animation-delay: $i * .8s;
                }
            }
        }
    }

</style>
