<template>
    <div class="wrapper">
        <div class="section" :class="{'first-of': firstOf}">
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Section",
        props: {
            text: {String, required: true},
            firstOf: {Boolean, required: true}
        }
    }
</script>

<style lang="scss" scoped>
    .section {
        text-align: left;
        width: calc(100% - 30px);
        padding: 0 15px;

        &.first-of {
            p {
                line-height: 28px;
            }
            >p:first-of-type:first-letter {
                font-weight: 900;
                color: var(--main-bar-color);
                float: left;
                margin: -0px 6px -10px -3px;
                font-size: 60px;
                line-height: 60px;
                vertical-align: middle;
            }
        }
    }
</style>
