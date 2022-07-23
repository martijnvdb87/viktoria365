<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Link from '@/components/Link.vue';
</script>

<template>
  <div class="info">
    <Segment format="small" title="Location" icon="map-pin">
      <Link href="https://www.google.com/maps/place/Helmond" target="_blank" variant="simple">Helmond, The Netherlands</Link>
    </Segment>
    <Segment format="small" title="Website" icon="link">
      <Link href="https://martijnvandenbosch.com" target="_blank" variant="simple">https://martijnvandenbosch.com</Link>
    </Segment>
    <Segment format="small" title="Github" icon="github">
      <Link href="https://github.com/martijnvdb87" target="_blank" variant="simple">https://github.com/martijnvdb87</Link>
    </Segment>
    <Segment format="small" title="LinkedIn" icon="linkedin">
      <Link href="https://www.linkedin.com/in/martijn-van-den-bosch-8a6574190" target="_blank" variant="simple">https://www.linkedin.com/in/martijn-van-den-bosch-8a6574190</Link>
    </Segment>
    <Segment format="small" title="CodePen" icon="codepen">
      <Link href="https://codepen.io/martijnvdb87" target="_blank" variant="simple">https://codepen.io/martijnvdb87</Link>
    </Segment>
    <Segment format="small" title="Email" icon="mail">
      <Link href="mailto:martijnvdb87@gmail.com" target="_blank" variant="simple">martijnvdb87@gmail.com</Link>
    </Segment>
  </div>
</template>

<style scoped lang="scss">
</style>
