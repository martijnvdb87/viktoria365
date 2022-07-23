<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Link from '@/components/Link.vue';
import LabelCloud from '@/components/LabelCloud.vue';
</script>

<template>
  <div class="work">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Segment title="SkillsTown" subtitle="March 2019 - Present | Lead full-stack developer" href="https://skillstown.com/" target="_blank">
            <ul>
              <li>Implemented <Link href="https://en.wikipedia.org/wiki/Learning_Tools_Interoperability" target="_blank">LTI 1.3</Link> which allowed us to contract the biggest customer in the history of the company</li>
              <li>Automated the <Link href="https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language" target="_blank">SAML SSO</Link> process which reduced the development time from 8 hours to 10 minutes</li>
              <li>Added <Link href="https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_(OIDC)" target="_blank">OpenID Connect</Link> capability to the platform</li>
              <li>Rewrote an unstable <Link href="https://svelte.dev/" target="_blank">Svelte</Link> application to a stable <Link href="https://reactjs.org/" target="_blank">React</Link> one</li>
              <li>Located and fixed mulitple <Link href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank">XSS vulnerabilities</Link></li>
              <li>Upgraded the legacy platform from PHP 5 to 7</li>
              <li>Implemented full <Link href="https://en.wikipedia.org/wiki/Learning_Record_Store" target="_blank">LRS</Link> capability in two existing platforms (PHP & C# .NET)</li>
              <li>Automated the ordering process between the learning platform and the <Link href="https://woocommerce.com/" target="_blank">WooCommerce</Link> webshop</li>
            </ul>
            <LabelCloud :labels="['PHP', 'Javascript', 'Typescript', 'C# .NET', 'SQL', 'MongoDB', 'HTML', 'CSS', 'Laravel', 'React', 'Vue', 'Svelte', 'REST API', 'Git', 'SASS', 'JSON', 'OpenID Connect', 'SAML', 'OAuth', 'OAuth 2.0', 'Wordpress', 'Moodle']" />
          </Segment>
          <Segment title="Monversa Web Development" subtitle="Jule 2013 - February 2019 | Owner & full-stack developer" href="https://web.archive.org/web/20180831062310/https://monversa.nl/" target="_blank">
            <ul>
              <li>Designed and developed my own Content Management System</li>
              <li>Built multiple Wordpress sites for small local businesses</li>
              <li>Setting up and maintaining Centos/Ubuntu, Apache/Nginx, PHP and MySQL servers</li>
              <li>Created several custom Wordpress webshop plugins</li>
            </ul>
            <LabelCloud :labels="['PHP', 'Javascript', 'SQL', 'HTML', 'CSS', 'UI/UX', 'REST API', 'Git', 'SASS', 'JSON', 'Wordpress']" />
          </Segment>
          <Segment title="Innowijs" subtitle="June 2018 - December 2018 (part-time) | Full-stack developer" href="https://innowijs.nl/" target="_blank">
            <ul>
              <li>Added custom interactivity to <Link href="https://articulate.com/360/storyline" target="_blank">Articulate Storline</Link> online courses</li>
              <li>Designed and developed a modern <Link href="https://moodle.org/" target="_blank">Moodle</Link> theme</li>
              <li>Created a custom online libary Wordpress plugin</li>
              <li>Built a Wordpress site for a charity organisation</li>
              <li>Developed an interactive tablet tour for children visting a museum located in The Hague</li>
            </ul>
            <LabelCloud :labels="['PHP', 'Javascript', 'SQL', 'HTML', 'CSS', 'UI/UX', 'REST API', 'SASS', 'JSON', 'Wordpress', 'Moodle']" />
          </Segment>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work {
  .container {
    padding: 1.5rem;
  }

  .columns__column {
    ul {
      font-size: 0.9375rem;
      margin: 0;

      li {
        margin-bottom: 0.25rem;

        &::marker {
          color: var(--blue-400);
        }
      }
    }
    
    p,
    ul {
      margin-bottom: 1rem;
    }
  }
}
</style>
