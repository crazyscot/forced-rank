<script setup lang="ts">
import { state, options, initialiseQuestions, Result } from '../state.ts'
import MatrixDisplay from '@/components/MatrixDisplay.vue'
import ResultItem from '@/components/ResultItem.vue'
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'

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
    if (res.score == prev_score && !res.place.endsWith('=')) {
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
    <div v-if="state.matrix_valid">
      <h1>Results</h1>
      <table class="results">
        <tbody>
          <tr>
            <th>Place</th>
            <th></th>
            <th v-if="options.show_scores">Score</th>
          </tr>
          <ResultItem v-for="(res, index) in results" :key="index" :item="res" :index="index" />
        </tbody>
      </table>
      <table class="options">
        <tbody>
          <tr>
            <td>Show scores</td>
            <td><ToggleSwitch v-model="options.show_scores" /></td>
          </tr>
          <tr>
            <td>Show response matrix</td>
            <td><ToggleSwitch v-model="options.results_show_grid" /></td>
          </tr>
        </tbody>
      </table>
      <div style="padding: auto">
        <br />
        <MatrixDisplay v-if="options.results_show_grid" />
      </div>
    </div>
    <div v-else>
      <h1><font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="error" /> Oops</h1>
      <p>You got here without any questions or responses.</p>
      <p>Did you press Reload? Please don't do that.</p>
      <p>Did you direct-link here? Sorry, that won't work.</p>
    </div>
  </div>

  <br style="height: 3ex" />

  <nav>
    <ul>
      <li v-if="state.matrix_valid">
        <RouterLink to="/questions" @click="initialiseQuestions()"
          ><Button severity="contrast"
            >Try again (same items) <font-awesome-icon :icon="['fa', 'undo']" /></Button
        ></RouterLink>
      </li>
      <li>
        <RouterLink to="/setup"
          ><Button severity="secondary"
            >Start over (edit items) <font-awesome-icon :icon="['fa', 'recycle']" /></Button
        ></RouterLink>
      </li>
      <li>
        <RouterLink to="/"
          ><Button severity="secondary"
            >About <font-awesome-icon :icon="['fa', 'question']" /></Button
        ></RouterLink>
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
  table.options {
    /* center it */
    margin: 0 auto;
  }
  table.matrix {
    /* center it */
    margin: 0 auto;
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
