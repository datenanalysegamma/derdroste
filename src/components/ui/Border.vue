<template>
    <hr class="border"/>
</template>

<script>
    export default {
        name: "Border"
    }
</script>

<style lang="scss" scoped>
    .border {
        border-top: none;
        border-bottom: 1px solid var(--navigation-mobile-color);
        margin: 30px 15px;
        transform: rotate(-3deg);

        @media (min-width: 767px) {
            margin: 40px 15px;
        }
        @media (min-width: 1023px) {
            margin: 50px 15px;
        }
        @media (min-width: 1439px) {
            margin: 60px 15px;
        }
    }
</style>
