<template>
    <div class="container">
        <div class="PageAccueilStyle">
            <PageAccueil />
        </div>
    </div>
</template>
<script>
import PageAccueil from '@/components/accueil.vue'

export default {
    name: 'VAccueil',
    components: {
        PageAccueil
    },
};
</script>
<style scoped>
.PageAccueilStyle {
    position: static;
    margin-top: 195px;
    padding: 10px;

}

</style>
