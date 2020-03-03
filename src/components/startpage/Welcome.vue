<template>
    <div class="welcome">
        <div class="text-center">
            <h1>Willkommen auf meiner Webseite!</h1>
        </div>
        <div class="slide">
            <section-skew :first-of="true" :text="'Mein Name ist Lukas Droste und ich programmiere und designe Webanwendungen. Wenn du mehr über mich und meine Arbeit erfahren willst, dann swipe nach links oder klicke oben auf das kleine Zahnrad um direkt ins Menü zu gelangen.'"></section-skew>
        </div>
    </div>
</template>

<script>
    import SectionSkew from '../ui/SectionSkew'

    export default {
        name: "Welcome",
        components: {
            SectionSkew
        }
    }
</script>

<style lang="scss" scoped>
    .welcome {
        .slide {
            transform: translateX(-100vw);
            animation: slideInLeft forwards .5s;
            animation-delay: 1s;
        }

        @keyframes slideInLeft {
            0% {transform: translateX(-100vw);}
            100% {transform: translateX(0);}
        }
    }

</style>
