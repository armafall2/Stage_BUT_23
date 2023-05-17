<template>
    <div class="pageTestStyle">
        <PageTest />
    </div>
</template>
<script>
import PageTest from '@/components/test.vue'
export default {
    name: 'Vtest',
    components: {
        PageTest
    },
};
</script>

<style scoped>
.pageTestStyle {
    position: static;
    margin-top: 195px;
    padding: 10px;
}
</style>
