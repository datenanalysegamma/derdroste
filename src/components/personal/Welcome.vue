<template>
    <div class="welcome">
        <Section :first-of="true" :text="'Hey, Du hast heute den Jackpot gemacht! Denn du darfst heute einen virtuellen Tag mit mir verbringen, um mich besser kennen zu lernen.'"></Section>
        <border></border>
        <Section :first-of="false" :text="'All die Steckbriefe und Kurzinformationen finde ich ein bisschen unpersönlich. Lass uns lieber ein Abenteuer erleben!'"></Section>
        <section-skew :first-of="false" :text="'Also swipe einfach nach Links und los geht´s!'"></section-skew>
    </div>
</template>

<script>
    import Section from "../ui/Section";
    import Border from "../ui/Border";
    import SectionSkew from "../ui/SectionSkew";

    export default {
        name: "Welcome",
        components: {SectionSkew, Border, Section}
    }
</script>

<style lang="scss" scoped>

</style>
