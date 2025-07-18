<script setup lang="ts">
import { options } from '../state.ts'
import DebugPane from '@/components/DebugPane.vue'
import QuestionItem from '@/components/QuestionItem.vue'
</script>

<template>
  <DebugPane v-if="options.debug_matrix" />
  <div id="questions">
    <QuestionItem />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .questions {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
.questions {
  width: 100%;
  h1 {
    text-align: center;
  }
}
</style>
