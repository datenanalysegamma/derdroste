<template>
    <div v-swipe-left="swipeLeft" class="start">
        <transition name="fade" mode="out-in">
            <welcome v-if="activeComponent === 0"/>
            <choose v-if="activeComponent === 1"/>
        </transition>
    </div>
</template>

<script>
    import Welcome from './Welcome'
    import Choose from './Choose'
    import {store} from "../../store/Store";

    export default {
        name: "Index",
        components: {
            Welcome,
            Choose
        },
        methods: {
            swipeLeft () {
                if (this.activeComponent < 1) {
                    store.commit('passed')
                }
            }
        },
        computed: {
            activeComponent () {
                return store.state.startPage
            }
        }
    }
</script>

<style lang="scss" scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s, transform .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: translateX(-100vw);
    }

</style>
