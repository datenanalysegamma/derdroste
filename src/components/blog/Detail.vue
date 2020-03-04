<template>
    <div class="blog-detail">
        <template v-for="blog in blogs">
            <div v-if="blog.id === stateBlog" class="content" :key="blog.id">
                <h1>{{blog.title}}</h1>
                <span>{{blog.date}}</span>
                <div class="head-section">
                    <img :src="require(`../../assets/blog/${blog.image}`)" alt="#" />
                </div>
                <template v-for="sections in blog.sections">
                    <div class="text-section" :key="sections.id">
                        <h2 v-if="sections.subtitle">{{sections.subtitle}}</h2>
                        <img v-if="sections.image" :src="require(`../../assets/blog/${sections.image}`)" alt="#" />
                        <p>{{sections.content}}</p>
                        <border v-if="sections.border"></border>
                        <div class="seperator" v-else></div>
                    </div>
                </template>



            </div>
        </template>
    </div>
</template>

<script>
    import {store} from "../../store/Store";
    import {Blogs} from "../../mixins/Blogs";
    import Border from '../ui/Border'
    import {ScrollTop} from "../../mixins/ScrollTop";

    export default {
        name: "Detail",
        components: {Border},
        mixins: [Blogs, ScrollTop],
        computed: {
            stateBlog () {
                return store.state.blog
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blog-detail {
        span, p,
        h2, h1 {
            color: var(--main-bar-color);
            margin: 10px 0;
        }

        .content {

            .seperator {
                padding: 15px 0;
            }

            .text-section {
                img {
                    width: 100%;
                    height: auto;
                }

                hr {
                    &.border {
                        transform: rotate(0);
                    }
                }
            }

            .head-section {
                position: relative;
                overflow: hidden;
                width: calc(100% + 60px);
                margin: 10px -30px 20px;

                img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
            }
        }
    }
</style>
