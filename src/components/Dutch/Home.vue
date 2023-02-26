<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Link from '@/components/Link.vue';
</script>

<template>
  <div class="language">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Segment title="Nederlands">
            <p>Nederlands</p>
          </Segment>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.language {
  .container {
    padding: 1.5rem;
  }
    
  .columns__column {
    p,
    ul {
      margin-bottom: 1rem;
    }
  }
  @media only screen and (min-width: 80rem) {
    .columns__column {
      display: flex;
      flex-wrap: wrap;
      gap: 0 3rem;

      > section {
        flex: 0 0 calc(50% - 1.5rem);
      }
    }
  }
}
</style>
