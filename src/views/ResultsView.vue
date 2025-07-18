<script setup lang="ts">
import { state, options, initialiseQuestions, Result } from '../state.ts'
import MatrixDisplay from '@/components/MatrixDisplay.vue'
import ResultItem from '@/components/ResultItem.vue'
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const valid = computed(() => {
  return state.matrix.length > 0
})

const results = computed(() => {
  const n = state.items.length
  const scores: number[] = new Array(n)
  scores.fill(0)
  console.log('calculating!')
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const res = state.matrix[j][i]
      if (res.valid) {
        if (res.answer !== undefined) {
          scores[res.answer]++
        } else {
          console.warn('undefined answer for matrix ' + i + ',' + j)
        }
      }
    }
  }
  const ary: Result[] = []
  state.items.forEach((value, i) => {
    console.log('score for ' + i + '(' + value + ')' + ' is ' + scores[i])
    ary.push(new Result(value, '', scores[i]))
  })
  ary.sort((a, b) => b.score - a.score)
  // Compute placings, including equalities
  let index = 1
  let prev_place = -1
  let prev_score = -1
  ary.forEach((res) => {
    if (res.score == prev_score) {
      res.place = prev_place + '='
    } else {
      res.place = index.toString()
      prev_place = index
      prev_score = res.score
    }
    ++index
  })
  // add '=' to the place on the first item of each equality clade
  // we do this by traversing backwards (there must be a tidier way to do this?)
  ary.reverse()
  prev_score = -1
  ary.forEach((res) => {
    if (res.score == prev_score && !res.item.endsWith('=')) {
      res.place += '='
    }
    prev_score = res.score
  })
  ary.reverse() // now put it back
  return ary
})
</script>

<template>
  <div class="results">
    <h1>Results</h1>
    <table v-if="valid" class="results">
      <tbody>
        <tr>
          <th>Place</th>
          <th></th>
          <th v-if="options.show_scores">Score</th>
        </tr>
        <ResultItem v-for="(res, index) in results" :key="index" :item="res" :index="index" />
      </tbody>
    </table>
    <div v-if="!valid">How did you get here? There are no results...</div>
    <!-- TODO make score column optional (already in state) -->
    <!-- TODO make grid optional -->
    <MatrixDisplay v-if="valid" />
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
  table.results {
    border-collapse: true;
    border-spacing: 0px 10px;
    tr {
      margin: 1ex !important;
    }
    tr.item {
      background: var(--color-accent);
      font-size: 200%;
      color: var(--color-accent-text);
      border: 1px solid black !important;
      td {
        padding: 0.5ex 0.5em;
      }
      td.place {
        text-align: left;
      }
      td.item {
        text-align: left;
      }
      td.score {
        text-align: center;
      }
    }
  }
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
