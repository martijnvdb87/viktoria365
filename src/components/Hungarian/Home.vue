<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="language">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Segment title="Szia!" icon="smile">
            <p>Viktóriának hívnak. <strong>Diplomás magyartanár</strong> (magyar nyelv és irodalom) és <strong>angol mint idegen nyelv</strong> oktató vagyok. Hollandiában élek.</p>
          </Segment>

          <Segment title="A következő nyelvek tanulásában tudok neked segíteni" icon="award">
            <ul>
              <li><strong>magyar</strong> (kezdő, középhaladó, haladó)</li>
              <li><strong>angol</strong> (kezdő, középhaladó)</li>
              <li><strong>holland</strong> (kezdő)</li>
            </ul>
          </Segment>

          <Segment title="Így tudsz velem tanulni" icon="message-square">
            <ul>
              <li>online magánóra (1 óra = 50 perc)</li>
              <li>online csoportos óra (1 óra = 90 perc)</li>
            </ul>
            <p>Ha már van könyved, használhatjuk azt, de nekem is sok tananyagom van.</p>
          </Segment>
            
          <Segment title="Érdekel?" icon="heart">
            <p>Akkor ismerjük meg egymást! Itt foglalhatsz időpontot a 15 perces szintfelmérő (ingyenes) beszélgetéshez:</p>
            <p><Button href="" target="_blank">Boek gratis kennismakingsgesprek</Button></p>
          </Segment>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
