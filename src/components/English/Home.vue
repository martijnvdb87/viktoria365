<script setup lang="ts">
import Segment from '@/components/Segment.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="language">
    <div class="container">
      <section class="columns">
        <div class="columns__column">
          <Segment title="Hello!" icon="smile">
            <p>My name is Viktória. I'm a <strong>certified Hungarian language and literature teacher</strong> and a <strong>TESOL/TEFL instructor</strong> (English as a second language). I live in the Netherlands.</p>
          </Segment>

          <Segment title="I can help you learn:" icon="award">
            <ul>
              <li><strong>Hungarian</strong> (beginner, intermediate and advanced)</li>
              <li><strong>English</strong> (beginner, intermediate)</li>
              <li><strong>Dutch</strong> (beginner)</li>
            </ul>
          </Segment>

          <Segment title="I offer:" icon="message-square">
            <ul>
              <li>online 1:1 lessons (1 lesson = 50 min)</li>
              <li>online group lessons (1 lesson = 90 min)</li>
            </ul>
            <p>You can bring your own book or I'll make learning material for you.</p>
          </Segment>
            
          <Segment title="Are you interested?" icon="heart">
            <p>Then let's get to know each other! Please fill in the form below.</p>
            <p><Button href="https://forms.gle/THRNgddLTF5HcTcYA" target="_blank">Application form</Button></p>
          </Segment>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
