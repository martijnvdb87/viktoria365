<script setup lang="ts">
import Segment from '@/components/Segment.vue';
</script>

<template>
  <div class="about">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Segment title="Introduction" icon="user">
            <p>My name is Viktória. I'm a certified Hungarian language and literature teacher, TESOL/TEFL instructor and online content creator. I speak Hungarian (it's my mother tongue), English and Dutch too. I've been living in the Netherlands since 2011. I love learning and teaching foreign languages. Besides being a teacher, I used to be an English-Hungarian translator and I've written and self-published two e-books as well.</p>
          </Segment>
          <Segment title="I speak the following languages" icon="message-square">
            <ul>
              <li>Hungarian C2 (native)</li>
              <li>English C1 (advanced)</li>
              <li>Dutch B2 (upper intermediate)</li>
              <li>Italian A2 (beginner)</li>
            </ul>
          </Segment>
        </div>
        <aside class="columns__column">
          <Segment format="small" title="Certificates" icon="award">
            <ol>
              <li>TESOL/TEFL teaching <strong>English as a second or foreign language</strong> instructor</li>
              <li><strong>BA</strong> (Bachelor of Arts) in <strong>Hungarian language &amp; literature</strong> (University of Nyíregyháza)</li>
              <li>The Bilingual Brain (University of Houston)</li>
              <li>Babel Language Courses (Dutch)</li>
              <li>New York Language School (English)</li>
            </ol>
          </Segment>
        </aside>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  > .container {
    padding: 1.5rem;
  }

  ol {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1.5rem;
    }
  }

  ul {
    margin-top: 0;
  }
}
</style>
