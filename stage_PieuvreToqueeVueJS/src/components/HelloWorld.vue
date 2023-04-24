<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
