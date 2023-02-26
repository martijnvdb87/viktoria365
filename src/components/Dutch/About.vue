<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Link from '@/components/Link.vue';
import Info from '@/components/Info.vue';
import Introduction from '@/components/Introduction.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="about">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Introduction />
          <Segment title="Work" icon="briefcase">
            <p></p>
          </Segment>
        </div>
        <aside class="columns__column">
          <Info />
        </aside>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about > .container {
  padding: 1.5rem;
}
</style>
