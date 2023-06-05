<template>
    <div class="CalendrierStyle">
        <PageCalendrier />
    </div>
</template>

<script>
import PageCalendrier from '/src/components/calendrier.vue'
export default {
    name: 'VCalendrier',
    components: {
        PageCalendrier
    },
};
</script>

<style scoped>
.CalendrierStyle {
    position: static;
    margin-top: 195px;
    padding: 10px;
}
</style>
