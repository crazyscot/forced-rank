<script setup lang="ts">
import { computed } from 'vue'
import { state, choice } from '../state.ts'
import QuestionRow from './QuestionRow.vue'
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'

const question = computed(() => {
  return state.questions[0]
})

// TODO make this emit instead of call the root choice fn ?
</script>

<template>
  <div v-if="state.questions.length" class="qitem">
    <h1>Which wins?</h1>
    <table class="question">
      <tbody>
        <QuestionRow :text="question.text(true)" @clicked="choice(question.choice(true))" />
        <tr>
          <td class="or">or</td>
        </tr>
        <QuestionRow :text="question.text(false)" @clicked="choice(question.choice(false))" />
      </tbody>
    </table>
    <p>
      {{ state.questions.length }} question<span v-if="state.questions.length !== 1">s</span> to go
    </p>
  </div>
  <div v-else>
    <!-- No questions outstanding: either we're done, or in an error state -->
    <div v-if="state.matrix_valid" class="done">
      <h1>We're all done!</h1>
      <h2>
        <RouterLink to="/results"
          ><Button severity="contrast"
            >Ready for the results? <font-awesome-icon :icon="['fa', 'arrow-right']" /></Button
        ></RouterLink>
      </h2>
    </div>
    <div v-else class="oops">
      <h1><font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="error" /> Oops</h1>
      <p>You got here without any questions or responses.</p>
      <p>Did you press Reload? Please don't do that.</p>
      <p>Did you direct-link? Please don't do that, it won't work.</p>
      <br />
      <RouterLink to="/setup"
        ><Button severity="danger">Start over<font-awesome-icon :icon="['fa', 'recycle']" /></Button
      ></RouterLink>
    </div>
  </div>
</template>

<style>
table.question {
  tr.question {
    font-size: 250%;
    td {
      display: inline-block;
      cursor: pointer;
      min-width: 100%;
      a {
        color: var(--color-accent-text);
      }
      background: var(--color-accent);
      border-radius: 10px;
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

.qitem,
.done {
  display: flex;
  flex-direction: column;
}
.done {
  align-items: center;
  justify-content: center;
}
</style>
