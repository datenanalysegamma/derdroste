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
    }
</style>
