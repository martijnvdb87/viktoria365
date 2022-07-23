<script setup lang="ts">
import Profile from '@/components/Profile.vue';
</script>

<template>
  <div class="resume">
    <div class="resume__document"></div>
    <div class="resume__document"></div>
  </div>
</template>

<style scoped lang="scss">
.resume {
  padding: 3rem 1.5rem;

  .resume__document {
    width: 71rem;
    max-width: 100%;
    aspect-ratio: 210 / 297;
    margin: auto;
    margin-bottom: 1.5rem;
    background-color: #ffffff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  }
}
</style>
