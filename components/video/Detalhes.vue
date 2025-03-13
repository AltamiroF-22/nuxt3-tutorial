<template>
  <h1>Components - nuxt 3</h1>
  <p>{{ differenceInDays }} dias atras</p>
</template>

<script setup lang="ts">
const { differenceInDays, DaysPassed } = useFormatacao();

const videoDate = new Date(2023, 9, 2);

DaysPassed(videoDate);
</script>
