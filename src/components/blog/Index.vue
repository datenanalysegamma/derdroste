<template>
    <div class="blog">
        <Section :first-of="true" :text="'Lukas bloggt über Webentwicklung, Spiele Entwicklung und alles mögliche!'"></Section>
        <template v-for="blog in filter">
            <div class="blog-preview" :key="blog.id">
                <img :src="require(`../../assets/blog/${blog.image}`)" alt="#"/>
                <div class="content">
                    <div class="date">
                        <span>{{blog.date}}</span>
                    </div>
                    <div class="title">
                        <span>{{blog.title}}</span>
                    </div>
                    <div class="description">
                        <span>{{blog.description}}</span>
                    </div>
                    <router-link @click.native="setBlog(blog.id)" :to="'/blog/detail'" class="anchor">Weiterlesen</router-link>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import Section from "../ui/Section";
    import {Blogs} from '../../mixins/Blogs'
    import {store} from "../../store/Store";
    // import axios from 'axios'

    export default {
        name: "Index",
        components: {Section},
        mixins: [Blogs],
        methods: {
          setBlog (id) {
              store.commit('setBlog', id)
          }
        },
        computed: {
            filter() {
                return this.blogs.slice().reverse()
            }
        }

        /* beforeCreate() {
            axios.get('https://api.myjson.com/bins/vktwc').then(resp => {

                console.log(resp.data);
            });
        } */
    }
</script>

<style lang="scss" scoped>
    .blog {

        .blog-preview {
            margin: 40px 0;
            overflow: hidden;
            width: 100%;

            img {
                width: 100%;
                height: auto;
                display: block;
            }

            .content {
                z-index: 2;
                position: relative;
                border: 2px solid var(--navigation-mobile-color);
                background-color: var(--section-bg);
                width: calc(100% - 54px);
                padding: 20px 25px 30px;

                &::before,
                &::after {
                    content: '';
                    position: absolute;
                }

                &::before {
                    top: -10px;
                    left: 0;
                    transform: rotate(-3deg);
                    width: calc(100% + 4px);
                    height: 20px;
                    border-top: 2px solid var(--navigation-mobile-color);
                    background-color: var(--section-bg);

                    @media (min-width: 439px) {
                        height: 25px;
                        top: -13px;
                    }
                    @media (min-width: 767px) {
                        height: 30px;
                        top: -18px;
                    }
                    @media (min-width: 1439px) {
                        height: 60px;
                        top: -24px;
                    }

                    @media (min-width: 1599px) {
                        height: 60px;
                        top: -29px;
                    }
                }
                &::after {
                    right: -2px;
                    top: -17px;
                    height: 23px;
                    width: 2px;
                    background-color: var(--navigation-mobile-color);

                    @media (min-width: 439px) {
                        height: 28px;
                        top: -22px;
                    }

                    @media (min-width: 767px) {
                        height: 40px;
                        top: -32px;
                    }

                    @media (min-width: 1439px) {
                        height: 66px;
                        top: -44px;
                    }

                    @media (min-width: 1599px) {
                        height: 70px;
                        top: -55px;
                    }
                }

                .date {
                    text-align: center;
                    position: absolute;
                    top: 0;
                    right: 25px;
                    span {
                        color: var(--navigation-primary-color);
                        font-size: 12px;

                        @media (min-width: 767px) {
                            font-size: 16px;
                        }
                        @media (min-width: 1023px) {
                            font-size: 18px;
                        }
                        @media (min-width: 1439px) {
                            font-size: 20px;
                        }
                    }
                }

                .title {
                    span {
                        display: block;
                        padding: 10px 0 0;
                        font-size: 22px;
                        font-weight: 900;
                        color: var(--navigation-primary-color);

                        @media (min-width: 767px) {
                            font-size: 26px;
                            padding: 15px 0 0;
                        }
                        @media (min-width: 1023px) {
                            font-size: 30px;
                            padding: 20px 0 0;
                        }
                        @media (min-width: 1439px) {
                            font-size: 34px;
                            padding: 30px 0 0;
                        }
                    }
                }

                .description {
                    span {
                        display: block;
                        padding: 10px 0;
                        font-size: 18px;

                        @media (min-width: 767px) {
                            padding: 15px 0;
                            font-size: 22px;
                        }
                        @media (min-width: 1023px) {
                            padding: 20px 0;
                            font-size: 24px;
                        }
                        @media (min-width: 1439px) {
                            font-size: 28px;
                            padding: 30px 0;
                        }
                    }
                }

                .anchor {
                    display: block;
                    list-style: none;
                    padding: 10px 16px;
                    background-color: var(--main-bar-color);
                    text-align: center;
                    width: fit-content;
                    text-decoration: none;
                    color: var(--navigation-mobile-color);
                    font-size: 20px;
                    font-weight: 600;
                    filter: brightness(1.1);
                    margin: 25px auto 0;

                    @media (min-width: 767px) {
                        font-size: 24px;
                        padding: 15px 20px;
                    }
                    @media (min-width: 1023px) {
                        font-size: 26px;
                        padding: 20px 24px;
                    }
                    @media (min-width: 1439px) {
                        font-size: 30px;
                    }
                }
            }
        }
    }

</style>
