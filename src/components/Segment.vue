<script setup lang="ts">
import Icon from '@/components/Icon.vue';

const props = withDefaults(defineProps<{
  title?: string,
  subtitle?: string,
  href?: string,
  target?: string,
  icon?: string,
  format?: string,
}>(), {
  format: 'medium',
  target: '_self'
});
</script>

<template>
  <section :class="['segment', `segment--${props.format}`]">
    <header v-if="props.title || props.icon" class="segment__header">
      <Icon v-if="props.icon" :type="props.icon" class="segment__icon" />
      <h2 v-if="props.title && props.href" class="segment__title">
        <a :href="props.href" :target="props.target">
          {{props.title}}
          <Icon v-if="props.target === '_self'" type="link" class="segment__icon" />
          <Icon v-else type="external-link" class="segment__icon" />
        </a>
      </h2>
      <h2 v-if="props.title && !props.href" class="segment__title">{{props.title}}</h2>
      <p v-if="props.subtitle" class="segment__subtitle">{{props.subtitle}}</p>
    </header>
    <div class="segment__content"><slot></slot></div>
  </section>
</template>

<style scoped lang="scss">
.segment {
  margin-bottom: 4rem;
}

.segment__header {
  display: flex;
  flex-wrap: wrap;
  gap: 0 0.625rem;
  align-items: center;
  margin-bottom: 0.5rem;
  color: var(--gray-900);

  a {
    display: inline-block;
    text-decoration: none;
    color: var(--gray-900);
    border-radius: 0.125rem;
    transition: transform ease 160ms, color ease 160ms;

    svg {
      width: 1rem;
      height: 1rem;
      vertical-align: text-top;
    }

    &:hover {
      color: var(--blue-500);
    }

    &:active {
      transform: scale(0.95);
    }

    &:focus-visible {
      z-index: 1;
      outline: 0.1875rem solid var(--blue-350);
      color: var(--blue-500);
    }
  }
}

.segment__icon {
  width: 1.25rem;
  height: 1.25rem;
}

.segment__title {
  font-size: 0.9375rem;
  font-weight: 600;
}
.segment__subtitle {
  font-size: 0.875rem;
  font-weight: 300;
  flex: 0 0 100%;
  color: var(--gray-500);
}

.segment__content {
  p {
    margin: 2rem;
  }
}

.segment.segment--small {
  margin-bottom: 3rem;

  .segment__content {
    font-size: 0.9375rem;
  }
}
</style>
