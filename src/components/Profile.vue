<script setup lang="ts">
import profilePicture from '@/assets/images/profile-picture.jpg';
import Status from '@/components/Status.vue';
import PlanIntake from '@/components/PlanIntake.vue';
import Button from '@/components/Button.vue';
import { setLanguage } from '@/enums';
import { router } from '@/main';

const props = withDefaults(defineProps<{
  status?: boolean
}>(), {
  status: false
});

function switchLanguage() {
  setLanguage(null);
  router.push('/');
}
</script>

<template>
  <div class="profile">
    <figure>
      <img :src="profilePicture" alt="Viktoria365">
      <figcaption>Viktoria365</figcaption>
      <Status v-if="props.status"></Status>
    </figure>
    <header>
      <h1>Viktoria365</h1>
      <p></p>
      <Button :action="switchLanguage">Language</Button>
      <PlanIntake />
    </header>
  </div>
</template>

<style scoped lang="scss">
.profile {
  display: flex;
  gap: 1.5rem;
  height: 10.5rem;
  padding: 0rem 1.5rem;
  align-items: center;

  figure {
    position: relative;
    z-index: 1;
    height: 7.5rem;
    flex: 0 0 7.5rem;

    img {
      width: 7.5rem;
      height: 7.5rem;
      border: none;
      border-radius: 999rem;
      overflow: hidden;
      background-color: var(--gray-100);
    }

    figcaption {
      display: none;
    }

    .status {
      position: absolute;
      bottom: 0;
      left: calc(100% - 2.5rem);
    }
  }

  header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.45;
    flex: 1 0 0;

    h1 {
      font-weight: 600;
      font-size: 1.375rem;
      color: var(--gray-900);
    }

    p {
      font-weight: 350;
      font-size: 1.0625rem;
    }
  }
}
</style>
