<script setup lang="ts">
import { ref, onMounted, onUnmounted, Ref } from 'vue';
import Profile from '@/components/Profile.vue';
import Skills from '@/components/Skills.vue';
import Work from '@/components/Work.vue';
import Education from '@/components/Education.vue';
import Info from '@/components/Info.vue';
import QrCode from '@/components/QrCode.vue';
import Introduction from '@/components/Introduction.vue';
import DownloadResume from '@/components/DownloadResume.vue';

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
          <Introduction />
          <hr>
          <h3>Work</h3>
          <Work />
          <hr>
          <h3>Education</h3>
          <Education />
          <hr>
          <h3>Skills</h3>
          <Skills show-all />
        </div>
      </div>
    </div>
    <DownloadResume />
  </div>
</template>

<style lang="scss">
.resume {
  --resume-full-width: 315mm;
  --resume-aspect-ratio: 210 / 297;
  --resume-content-scale: 1;
  padding: 1rem 1rem 6rem 1rem;

  @media only screen and (min-width: 52rem) {
    padding: 2rem 2rem 6rem 2rem;
  }

  @media only screen and (min-width: 80rem) {
    padding: 3rem 3rem 6rem 3rem;
  }

  .resume__document {
    width: var(--resume-full-width);
    max-width: 100%;
    aspect-ratio: var(--resume-aspect-ratio);
    margin: auto;
    margin-bottom: 0.5rem;
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
      column-count: 2;
      gap: 0 3rem;
      padding-left: 1.5rem;

      li {
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

  .download-resume {
    position: fixed;
    bottom: 1.25rem;
    right: 50%;
    z-index: 10;
    transform: translateX(50%);

    .download-resume__link {
      border-radius: 999rem;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
  }

  .profile {
    padding: 0;
    margin-bottom: 2rem;

    .download-resume {
      display: none;
    }
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

    .segment__header {
      display: none;
    }

    p {
      font-size: 0.9375rem;
      margin-bottom: 1rem;
    }
  }

  .info {
    column-count: 2;
    gap: 0 3rem;
    margin-bottom: 1rem;

    .segment {
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

    .skills {
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
      column-count: 2;
    }
  }

  .skills {
    justify-content: space-between;
  }
}
</style>
