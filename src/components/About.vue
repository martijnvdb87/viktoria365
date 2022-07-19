<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Label from '@/components/Label.vue';
import Link from '@/components/Link.vue';
</script>

<template>
  <Segment title="Introduction" icon="user">
    <p>I'm a self-thought full stack developer from the Netherlands. I started developing websites when I was 12 years old and today, more than 20 years later, I still love every second of it.</p>
  </Segment>
  <Segment title="Work" icon="briefcase">
    <p>Currently, I'm working as lead developer at <Link href="https://www.skillstown.com" target="_blank">SkillsTown</Link>, which is a company part of the <Link href="https://www.saltagroup.com" target="_blank">Salta Group</Link> (formerly known as the NCOI Group). We are improving and maintaining two online learning platforms. The first one uses the <Link href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)" target="_blank">LAMP stack</Link> (PHP & MySQL) and a custom in-house built Javascript framework (some parts use React). The second platform is using .NET for the backend and Vue for the frontend using Typescript.</p>
  </Segment>
  <Segment title="Free time" icon="smile">
    <p>Besides watching series on Netflix and spending time with my wife, I like working on multiple <Link href="/projects/">personal projects</Link>.</p>
  </Segment>
  <Segment title="Tech stack" icon="code">
    <div class="label-cloud">
      <Label>PHP</Label>
      <Label>Javascript</Label>
      <Label>Typescript</Label>
      <Label>C# .NET</Label>
      <Label>SQL</Label>
      <Label>MongoDB</Label>
      <Label>HTML</Label>
      <Label>CSS</Label>
      <Label>UI/UX</Label>
      <Label>Laravel</Label>
      <Label>Slim</Label>
      <Label>React</Label>
      <Label>Vue</Label>
      <Label>Web Components</Label>
      <Label>Node.js</Label>
      <Label>Express.js</Label>
      <Label>Svelte</Label>
      <Label>REST API</Label>
      <Label>Git</Label>
      <Label>SASS</Label>
      <Label>Ajax</Label>
      <Label>JSON</Label>
      <Label>OpenID Connect</Label>
      <Label>SAML</Label>
      <Label>OAuth</Label>
      <Label>OAuth 2.0</Label>
      <Label>XML</Label>
      <Label>PWA</Label>
      <Label>Wordpress</Label>
      <Label>Moodle</Label>
    </div>
  </Segment>
</template>

<style scoped lang="scss">
.label-cloud {
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
}
</style>
