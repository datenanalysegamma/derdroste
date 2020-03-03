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
                &::before {
                    content: '';
                    position: absolute;
                    top: -10px;
                    left: 0;
                    transform: rotate(-3deg);
                    width: calc(100% + 4px);
                    height: 20px;
                    border-top: 2px solid var(--navigation-mobile-color);
                    background-color: var(--section-bg);
                }
                &::after {
                    content: '';
                    position: absolute;
                    right: -2px;
                    top: -17px;
                    height: 23px;
                    width: 2px;
                    background-color: var(--navigation-mobile-color);
                }

                .date {
                    text-align: center;
                    position: absolute;
                    top: 0;
                    right: 25px;
                    span {
                        color: var(--navigation-primary-color);
                        font-size: 12px;
                    }
                }

                .title {
                    padding: 10px 0 10px;
                    span {
                        font-size: 22px;
                        font-weight: 900;
                        color: var(--navigation-primary-color);
                    }
                }

                .description {
                    span {
                        font-size: 18px;
                    }
                }

                .anchor {
                    display: block;
                    list-style: none;
                    padding: 10px 8px;
                    background-color: var(--main-bar-color);
                    text-align: center;
                    width: 160px;
                    text-decoration: none;
                    color: var(--navigation-mobile-color);
                    font-size: 20px;
                    font-weight: 600;
                    filter: brightness(1.1);
                    margin: 25px auto 0;
                }
            }
        }
    }

</style>
