<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="language">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Segment title="Hoi!" icon="smile">
            <p>Mijn naam is Viktória. Ik ben <strong>lerares Hongaars</strong> (Hongaarse taal en literatuur) &amp; <strong>TESOL/TEFL instructeur</strong> (Engels als tweede taal). Ik woon in Nederland.</p>
          </Segment>

          <Segment title="De volgende talen kan ik je helpen leren:" icon="award">
            <ul>
              <li><strong>Hongaars</strong> (beginner, gevorderd en ver gevorderd)</li>
              <li><strong>Engels</strong> (beginner en gevorderd)</li>
              <li><strong>Nederlands</strong> (beginner)</li>
            </ul>
          </Segment>

          <Segment title="Zo kan je met mij leren:" icon="message-square">
            <ul>
              <li>online privéles (1 les = 50 min)</li>
              <li>online groepsles (1 les = 90 min)</li>
            </ul>
            <p>Heb je al een boek? Dan gebruiken wij dat. En jij mag ook gebruik maken van mijn eigen lesmateriaal.</p>
          </Segment>
            
          <Segment title="Ben je geïnteresseerd?" icon="heart">
            <p>Dan laten we elkaar leren kennen! Vul onderstaand formulier in.</p>
            <p><Button href="https://forms.gle/ntzmUF7gwyLTbNxr8" target="_blank">Contactformulier</Button></p>
          </Segment>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
