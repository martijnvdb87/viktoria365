<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Link from '@/components/Link.vue';
</script>

<template>
  <div class="introduction">
    <Segment title="Introduction" icon="user">
      <p>I'm a <strong>self-taught senior full-stack developer</strong> from the Netherlands. I have been developing websites and webapps for <strong>more than 20 years</strong>. I was 12 years old when I became interested in programming and realised I could turn my hobby into my profession. Being a developer means that I'm <strong>constantly learning</strong> and improving my skills. In my free time I like working on my own projects and I do this <strong>on a daily basis</strong> (see my <Link href="https://github.com/martijnvdb87" target="_blank">Github page</Link>). Most of the time I work <strong>independently</strong> but I also like to share what I know and work together with my teammates.</p>
    </Segment>
  </div>
</template>

<style scoped lang="scss">
  strong {
    font-weight: 575;
  }
</style>
