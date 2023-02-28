<script setup lang="ts">
import Segment from '@/components/Segment.vue';
</script>

<template>
  <div class="about">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Segment title="Introductie" icon="user">
            <p>Ik heet Viktória. Ik ben lerares Hongaars, Engels als tweede taal (TESOL/TEFL) instructeur n online content creator. Hongaars is mijn moedertaal en ik spreek Engels en Nederlands ook. Sinds 2011 woon ik in Nederland. Het leren van vreemde talen en lesgeven heb ik altijd heel erg leuk gevonden. Naast lerares zijn, ben ik ook vertaler en ik heb twee e-boeken in het Hongaars geschreven.</p>
          </Segment>
          <Segment title="Ik spreek" icon="message-square">
            <ul>
              <li>Hongaars C2 (moedertaal)</li>
              <li>Engels C1 (vergevorderd)</li>
              <li>Nederlands B2 (gevorderd)</li>
              <li>Italiaans A2 (beginner)</li>
            </ul>
          </Segment>
        </div>
        <aside class="columns__column">
          <Segment format="small" title="Certificaten" icon="award">
            <ol>
              <li>TESOL/TEFL <strong>Engels als tweede taal instructeur</strong></li>
              <li><strong>BA</strong> (HBO) <strong>Docent Hongaarse taal en literatuur</strong> (Universiteit van Nyíregyháza)</li>
              <li>The Bilingual Brain (Universiteit van Houston)</li>
              <li>Babel Taalcursussen (Nederlands)</li>
              <li>New York Language School (Engels)</li>
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
