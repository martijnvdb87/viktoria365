<script setup lang="ts">
import Label from '@/components/Label.vue';

const props = withDefaults(defineProps<{
  showAll?: boolean,
  labels?: string[]
}>(), {
  labels: () => []
});

const labels = [
  'PHP',
  'Laravel',
  'Composer',
  'Javascript',
  'Typescript',
  'NPM',
  'Yarn',
  'Node.js',
  'React',
  'Vue',
  'Svelte',
  'Web Components',
  'Webpack',
  'Vite',
  'SQL',
  'MongoDB',
  'C# .NET',
  'HTML',
  'CSS',
  'SASS',
  'BEM',
  'SEO',
  'PWA',
  'UI/UX',
  'Git',
  'REST API',
  'SOAP',
  'JSON',
  'JWT',
  'OpenID Connect',
  'SAML',
  'OAuth',
  'Wordpress',
  'Moodle',
  'Jest',
  'PHPUnit',
  'Docker',
  'Vagrant',
  'CI/CD',
  'SSH',
  'Redis',
  'Memcached',
];

const validLabel = (label: string): boolean => {
  return props.labels.map(label => label.toLowerCase()).includes(label.toLowerCase());
}
</script>

<template>
  <div class="skills">
    <template v-for="label in labels">
      <Label v-if="validLabel(label) || props.showAll">{{label}}</Label>
    </template>
  </div>
</template>

<style scoped lang="scss">
.skills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
