<template>
    <div class="container">
        <div class="PageDevisStyle">
            <PageDevis />
        </div>
    </div>
</template>

<script>
import PageDevis from '@/components/devis.vue'

export default {
    name: 'VDevis',
    components: {
        PageDevis
    },
};
</script>

<style scoped>
.PageDevisStyle{
    position: static;
    margin-top: 195px;
    padding: 10px;
}
</style>