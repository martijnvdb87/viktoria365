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
  'Javascript',
  'Typescript',
  'C# .NET',
  'SQL',
  'MongoDB',
  'HTML',
  'CSS',
  'UI/UX',
  'Laravel',
  'Composer',
  'React',
  'Vue',
  'Svelte',
  'Web Components',
  'Node.js',
  'REST API',
  'Git',
  'SASS',
  'JSON',
  'OpenID Connect',
  'SAML',
  'OAuth',
  'OAuth 2.0',
  'PWA',
  'Wordpress',
  'Moodle',
];

const validLabel = (label: string): boolean => {
  return props.labels.map(label => label.toLowerCase()).includes(label.toLowerCase());
}
</script>

<template>
  <div class="label-cloud">
    <template v-for="label in labels">
      <Label v-if="validLabel(label) || props.showAll">{{label}}</Label>
    </template>
  </div>
</template>

<style scoped lang="scss">
.label-cloud {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
