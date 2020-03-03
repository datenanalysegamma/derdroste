<template>
    <div v-if="showPlayer" class="player" :class="{'is-active': playing}">
        <svg @click="playAudio">
            <use xlink:href="../assets/player/bassboxxx.svg#Layer_1">

            </use>
        </svg>
    </div>
</template>

<script>
    import {store} from "../store/Store";

    export default {
        name: "Player",
        data () {
          return {
            playing: false,
            audio: new Audio(require('../assets/player/cashmo.mp3'))
          }
        },
        methods: {
            playAudio () {
                this.audio.loop = true;
                if (this.playing === false) {
                    this.audio.play();
                    this.playing = true
                } else {
                    this.audio.pause();
                    this.playing = false
                }

                const root = document.documentElement

                root.style.setProperty('--font', 'Don Graffiti')
                root.style.setProperty('--space', '2px')
            }
        },
        computed:  {
            showPlayer () {
                return store.state.player
            }
        }
    }
</script>

<style lang="scss" scoped>
    .player {
        z-index: 997;
        position: fixed;
        bottom: 5px;
        right: 10px;
        height: fit-content;
        width: fit-content;

        svg {
            fill: var(--main-bar-color);
            height: 40px;
            width: 40px;

            transition: fill 2s ease;
        }

        &.is-active {
            animation: playing .6s infinite;
        }

        @keyframes playing {
            0% {transform: scale(1);}
            50% {transform: scale(1.1);}
            100% {transform: scale(1);}
        }
    }

</style>
