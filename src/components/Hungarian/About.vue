<script setup lang="ts">
import Segment from '@/components/Segment.vue';
</script>

<template>
  <div class="about">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Segment title="Bemutatkozás" icon="user">
            <p>Viktóriának hívnak. Magyar nyelv és irodalom szakon szereztem a diplomámat, de emellett angol mint idegen nyelv oktató (TESOL/TEFL) és online tartalomkészítő is vagyok. A magyar az anyanyelvem, de angolul és hollandul is folyékonyan beszélek. 2011 óta élek Hollandiában. Nagyon szeretek nyelveket tanulni és tanítani. Nemcsak tanár, de angol-magyar fordító is vagyok, illetve két e-könyvet is írtam magánkiadásban.</p>
          </Segment>
          <Segment title="Ezeket a nyelveket beszélem" icon="message-square">
            <ul>
              <li>magyar C2 (anyanyelv)</li>
              <li>angol C1 (felsőfok)</li>
              <li>holland B2 (középfok)</li>
              <li>olasz A2 (alapfok)</li>
            </ul>
          </Segment>
        </div>
        <aside class="columns__column">
          <Segment format="small" title="Diploma, bizonyítvány" icon="award">
            <ol>
              <li>TESOL/TEFL <strong>angol mint idegen nyelv oktató</strong></li>
              <li><strong>BA</strong> (Bachelor of Arts) <strong>magyar nyelv és irodalom</strong> szakos tanár (Nyíregyházi Egyetem)</li>
              <li>The Bilingual Brain (University of Houston)</li>
              <li>Babel Nyelviskola (holland)</li>
              <li>New York Nyelviskola (angol)</li>
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
