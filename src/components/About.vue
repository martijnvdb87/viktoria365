<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Skills from '@/components/Skills.vue';
import Link from '@/components/Link.vue';
import Info from '@/components/Info.vue';
import Introduction from '@/components/Introduction.vue';
</script>

<template>
  <div class="about">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Introduction />
          <Segment title="Work" icon="briefcase">
            <p>I have just started working as senior full-stack developer at <Link href="https://www.ksyos.nl/" target="_blank">Ksyos</Link> based in Amsterdam. We are working with the Node.js, React and SQL techstack.</p>
          </Segment>
          <Segment title="Free time" icon="smile">
            <p>Besides watching series on Netflix and spending time with my wife, I like working on multiple <Link href="/projects/">personal projects</Link>.</p>
          </Segment>
          <Segment title="Skills" icon="code">
            <Skills show-all />
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
