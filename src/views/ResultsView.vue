<script setup lang="ts">
import { state, initialiseQuestions } from '../state.ts'
import MatrixDisplay from '@/components/MatrixDisplay.vue'
import { RouterLink } from 'vue-router'

function calculate() {
  console.log('calculating!')
}

calculate()
</script>

<template>
  <div class="results">
    <h1>Results</h1>
    Scores go here...
    <!-- TODO make grid optional -->
    <MatrixDisplay />
  </div>

  <br style="height: 3ex" />

  <nav>
    <ul>
      <li>
        <RouterLink to="/questions" @click="initialiseQuestions()"
          >Try again (same items) <font-awesome-icon :icon="['fa', 'undo']"
        /></RouterLink>
      </li>
      <li>
        <RouterLink to="/setup"
          >Start over (different set of items) <font-awesome-icon :icon="['fa', 'power-off']"
        /></RouterLink>
      </li>
      <li>
        <RouterLink to="/">About <font-awesome-icon :icon="['fa', 'question']" /></RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    list-style-type: none;
    text-align: center;
    li {
      padding: 1ex 0;
    }
  }
}
</style>
