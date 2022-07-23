<script setup lang="ts">
import { ref, onMounted, onUnmounted, Ref } from 'vue';
import Profile from '@/components/Profile.vue';
import LabelCloud from '@/components/LabelCloud.vue';
import Work from '@/components/Work.vue';
import Education from '@/components/Education.vue';
import Info from '@/components/Info.vue';
import QrCode from '@/components/QrCode.vue';

const resume: Ref<HTMLElement | undefined> = ref();
const resumeDocument: Ref<HTMLElement | undefined> = ref();

onMounted((): void => {
  updateResumeContentScale();

  window.addEventListener('resize', updateResumeContentScale);
});

onUnmounted((): void => {
  window.removeEventListener('resize', updateResumeContentScale);
});

let updateResumeContentScaleTimeout: number = 0;

const updateResumeContentScale = (): void => {
	if(updateResumeContentScaleTimeout) {
		window.cancelAnimationFrame(updateResumeContentScaleTimeout);
	}

  updateResumeContentScaleTimeout = window.requestAnimationFrame(() => {
    if(!(resume.value instanceof HTMLElement && resumeDocument.value instanceof HTMLElement)) {
      return;
    }

    const resumeWidth = getComputedStyle(resume.value).getPropertyValue('--resume-full-width');
  
    const divTemplate = document.createElement('div');
    divTemplate.style.width = resumeWidth;
    document.body.append(divTemplate);
  
    const originalWidth = divTemplate.offsetWidth;
    divTemplate.remove();
  
    resume.value.style.setProperty('--resume-content-scale', `${resumeDocument.value.offsetWidth / originalWidth}`);
  });
};
</script>

<template>
  <div ref="resume" class="resume">
    <div ref="resumeDocument" class="resume__document">
      <div class="resume__document-content">
        <div class="resume__document-content-padding">
          <Profile />
          <QrCode />
          <Info />
          <hr>
          <h3>Introduction</h3>
          <div class="introduction">
            <p>I'm a self-taught senior full-stack developer from the Netherlands. I started developing websites when I was 12 years old and today, more than 20 years later, I still love every second of it.</p>
          </div>
          <hr>
          <h3>Work</h3>
          <Work />
          <hr>
          <h3>Education</h3>
          <Education />
          <hr>
          <h3>Skills</h3>
          <LabelCloud show-all />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.resume {
  --resume-full-width: 315mm;
  --resume-aspect-ratio: 210 / 297;
  --resume-content-scale: 1;
  padding: 3rem 1.5rem;

  .resume__document {
    width: var(--resume-full-width);
    max-width: 100%;
    aspect-ratio: var(--resume-aspect-ratio);
    margin: auto;
    margin-bottom: 1.5rem;
    background-color: #ffffff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .resume__document-content {
    position: relative;
    width: var(--resume-full-width);
    aspect-ratio: var(--resume-aspect-ratio);
    transform: scale(var(--resume-content-scale));
    transform-origin: 0 0;
    overflow: hidden;
  }

  .resume__document-content-padding {
    padding: 4rem;
  }

  h3 {
    font-weight: 300;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 1.2;
  }

  hr {
    border: none;
    border-bottom: 0.0625rem solid var(--gray-400);
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  .segment {
    margin-bottom: 2rem;

    .segment__header {
      margin-bottom: 0.125rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0 3rem;
      padding-left: 1.5rem;

      li {
        width: calc(50% - 1.5rem);
        margin-bottom: auto;
      }
    }
  }

  .link {
    color: var(--gray-700);
    font-weight: 400;
    text-underline-offset: 0.0625rem;
    text-decoration-thickness: 0.0625rem;

    svg {
      display: none;
    }
  }

  .profile {
    padding: 0;
    margin-bottom: 2rem;
  }

  .qr-code {
    position: absolute;
    top: 4rem;
    right: 4rem;

    .link {
      color: var(--gray-400);

      &:hover {
        color: var(--blue-500);
      }
    }
  }

  .introduction {
    margin-bottom: 2rem;

    p {
      font-size: 0.9375rem;
      margin-bottom: 1rem;
    }
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    gap: 0 3rem;
    margin-bottom: 1rem;

    .segment {
      width: calc(50% - 1.5rem);
      margin-bottom: 1rem;
    }

    .segment__icon {
      display: none;
    }
  }

  .work,
  .education {
    .container {
      padding: 0;
      max-width: none;
    }

    .label-cloud {
      display: none;
    }

    .segment__icon {
      display: none;
    }
  }

  .work {
    .segment__header .segment__subtitle {
      flex: auto;
    }
  }

  .education {
    ul {
      display: none;
    }
    .columns__column {
      display: flex;
      flex-wrap: wrap;
      gap: 0 3rem;

      .segment {
        width: calc(50% - 1.5rem);
      }
    }
  }
}
</style>
