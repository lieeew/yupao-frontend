<template>
    {{ route.query }}
</template>

<script setup lang="ts">
  import {useRoute} from "vue-router";

  const route = useRoute();
  console.log(route)
</script>

<style scoped>

</style>
