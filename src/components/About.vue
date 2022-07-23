<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Label from '@/components/Label.vue';
import LabelCloud from '@/components/LabelCloud.vue';
import Link from '@/components/Link.vue';
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
            <LabelCloud>
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
              <Label>Composer</Label>
              <Label>React</Label>
              <Label>Vue</Label>
              <Label>Svelte</Label>
              <Label>Web Components</Label>
              <Label>Node.js</Label>
              <Label>REST API</Label>
              <Label>Git</Label>
              <Label>SASS</Label>
              <Label>JSON</Label>
              <Label>OpenID Connect</Label>
              <Label>SAML</Label>
              <Label>OAuth</Label>
              <Label>OAuth 2.0</Label>
              <Label>PWA</Label>
              <Label>Wordpress</Label>
              <Label>Moodle</Label>
            </LabelCloud>
          </Segment>
        </div>
        <aside class="columns__column">
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
