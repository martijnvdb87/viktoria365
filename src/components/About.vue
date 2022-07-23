<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import LabelCloud from '@/components/LabelCloud.vue';
import Link from '@/components/Link.vue';
import Info from '@/components/Info.vue';
</script>

<template>
  <div class="about">
  <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Segment title="Introduction" icon="user">
            <p>I'm a self-taught senior full-stack developer from the Netherlands. I started developing websites when I was 12 years old and today, more than 20 years later, I still love every second of it.</p>
          </Segment>
          <Segment title="Work" icon="briefcase">
            <p>Currently, I'm working as lead developer at <Link href="https://www.skillstown.com" target="_blank">SkillsTown</Link>, which is a company part of the <Link href="https://www.saltagroup.com" target="_blank">Salta Group</Link> (formerly known as the NCOI Group). We are improving and maintaining two online learning platforms. The first one uses the <Link href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank">LAMP stack</Link> (PHP & MySQL) and a custom in-house built Javascript framework (some parts use React). The second platform is using C# .NET for the backend and Vue for the frontend using Typescript.</p>
          </Segment>
          <Segment title="Free time" icon="smile">
            <p>Besides watching series on Netflix and spending time with my wife, I like working on multiple <Link href="/projects/">personal projects</Link>.</p>
          </Segment>
          <Segment title="Skills" icon="code">
            <LabelCloud show-all />
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
