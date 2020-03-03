<template>
    <div v-swipe-left="increaseState" class="personal">
        <transition
                :name="'fade'"
                mode="out-in">
            <welcome v-if="personalState === 0"></welcome>
            <choose v-if="personalState === 1"></choose>
        </transition>
    </div>
</template>

<script>
    import Welcome from './Welcome'
    import {store} from "../../store/Store";
    import Choose from "./Choose";

    export default {
        name: "Index",
        components: {Choose, Welcome},
        methods: {
          increaseState () {
              if (this.personalState < 1) {
                  store.commit('passPersonal')
              }
          }
        },
        computed: {
            personalState () {
                return store.state.personal
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
