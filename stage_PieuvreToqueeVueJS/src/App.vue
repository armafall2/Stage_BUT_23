<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/navbar.vue'
</script>

<template>
  <Navbar/>
  <RouterView />
</template>

<script>
export default {
  mounted() {
    document.addEventListener('touchmove', function (event) {
      if (event.scale !== 1) { event.preventDefault(); }
    }, false);
  }
}
</script>