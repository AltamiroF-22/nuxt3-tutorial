<template>
  <div>
    <p>PARAMS: {{ id }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
const { id } = route.params;
</script>
