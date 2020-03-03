<template>
    <div class="tech-page">
        <section-skew :first-of="true" :text="'Wenn dich interessiert, welche Technologien ich tagtäglich benutze, dann swipe dich doch mal durch mein Tech-Stack-Karussel!'"></section-skew>
        <tech-slider></tech-slider>
    </div>
</template>

<script>
    import TechSlider from './TechSlider'
    import SectionSkew from "../ui/SectionSkew";

    export default {
        name: "Index",
        components: {
            SectionSkew,
            TechSlider
        }
    }
</script>

<style lang="scss" scoped>

</style>
