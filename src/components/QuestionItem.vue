<script setup lang="ts">
import { state, choice } from '../state.ts'
import QuestionRow from './QuestionRow.vue'
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'

// TODO make this emit instead of call the root choice fn ?
</script>

<template>
  <div v-if="state.questions.length" class="qitem">
    <h1>Which wins?</h1>
    <table class="question">
      <tbody v-if="!state.questions[0].flip">
        <!-- ugh, cloned.. there must be a nicer way to do this? -->
        <QuestionRow :text="state.items[state.questions[0].first]" @clicked="choice(0)" />
        <tr>
          <td class="or">or</td>
        </tr>
        <QuestionRow :text="state.items[state.questions[0].second]" @clicked="choice(1)" />
      </tbody>
      <tbody v-else>
        <QuestionRow :text="state.items[state.questions[0].second]" @clicked="choice(1)" />
        <tr>
          <td class="or">or</td>
        </tr>
        <QuestionRow :text="state.items[state.questions[0].first]" @clicked="choice(0)" />
      </tbody>
    </table>
    <p>
      {{ state.questions.length }} question<span v-if="state.questions.length !== 1">s</span> to go
    </p>
  </div>
  <div v-if="state.questions.length === 0">
    <!-- centre it vertically on page? -->
    <h1>We're all done!</h1>
    <h2>
      <RouterLink to="/results"
        ><Button severity="contrast"
          >Ready for the results? <font-awesome-icon :icon="['fa', 'arrow-right']" /></Button
      ></RouterLink>
    </h2>
  </div>
</template>

<style>
table.question {
  tr.question {
    background: var(--color-accent);
    font-size: 250%;
    td {
      display: inline-block;
      cursor: pointer;
      min-width: 100%;
      a {
        color: var(--color-accent-text);
      }
    }
  }
  text-align: center;
  td.or {
    padding: 2ex 0;
  }
  a {
    display: block;
  }
}

.qitem {
  display: flex;
  flex-direction: column;
}
</style>
