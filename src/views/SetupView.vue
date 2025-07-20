<script setup lang="ts">
import SetupItem from '@/components/SetupItem.vue'
import Button from 'primevue/button'
import { state, initialiseQuestions } from '../state.ts'
import _ from 'lodash'

let message = ''
let isOK = true

const MAX_ITEMS = 15
const MIN_ITEMS = 3

function runChecks() {
  let msg = ''

  // Trim whitespace, filter out
  const filtered = _.chain(state.items)
    .map((it) => it.trim())
    .filter((it) => it.length > 0)
    .value()

  // There must be at least 3 non-whitespace items to proceed
  if (filtered.length < MIN_ITEMS) {
    msg = 'You need to provide at least ' + MIN_ITEMS + ' items'
  }

  // They must be unique
  const deduped = _.uniq(filtered)
  if (deduped.length != filtered.length) {
    msg = 'All items must be unique'
  }

  message = msg
  isOK = message === ''
}

function updateItem(idx: number, value: string) {
  state.items[idx] = value
  //console.log('UPDATE #' + idx + ' -> ' + value)
  //console.log(state.items)
  runChecks()
}
function addItem(top: boolean) {
  if (state.items.length < MAX_ITEMS) {
    if (top) state.items.unshift('')
    else state.items.push('')
  }
  //console.log('ADD; len is now ' + state.items.length)
  //console.log(state.items)
  runChecks()
}
function deleteItem(idx: number) {
  if (state.items.length) {
    state.items.splice(idx, 1)
  }
  //console.log('DELETE #' + idx + ': len is now ' + state.items.length)
  //console.log(state.items)
  runChecks()
}

// for a fun twist: we have separate sets of items we might add
const DEMOS = [
  ['puppies', 'kittens', 'pandas', 'guinea pigs', 'rabbits'],
  ['lions', 'giraffes', 'rhinoceroses', 'leopards', 'elephants'],
  ['slugs', 'snails', 'rats', 'snakes', 'spiders'],
]

let demo_state = 0

function demoMode() {
  // clear out any blanks while we're at it
  _.remove(state.items, (it) => !it.trim().length)

  console.log('state is ' + demo_state)

  DEMOS[demo_state].forEach((it) => {
    if (state.items.length < MAX_ITEMS && !state.items.includes(it)) {
      state.items.push(it)
    }
  })
  runChecks()

  if (++demo_state >= DEMOS.length) {
    demo_state = 0
  }
  console.log('state is now ' + demo_state)
}

function startOver() {
  _.remove(state.items, () => true)
  state.items.push('')
  state.items.push('')
  state.items.push('')
  runChecks()
}

runChecks()
</script>

<template>
  <nav>
    <RouterLink to="/"
      ><Button severity="secondary"><font-awesome-icon :icon="['fa', 'arrow-left']" />About</Button>
    </RouterLink>
  </nav>
  <div class="setup">
    <h2>What items do you want to rank?</h2>
    <p>
      <em>(maximum {{ MAX_ITEMS }})</em>
    </p>

    <component :is="state.items.length < MAX_ITEMS ? 'a' : 'span'" @click="addItem(true)">
      <font-awesome-icon :icon="['fas', 'plus-circle']" title="Add another"
    /></component>

    <ul>
      <SetupItem
        v-for="(value, index) in state.items"
        :modelValue="value"
        :key="index"
        v-bind:record="state.items[index]"
        @update:model-value="(v) => updateItem(index, v)"
        @delete="deleteItem(index)"
      />
    </ul>
    <component :is="state.items.length < MAX_ITEMS ? 'a' : 'span'" @click="addItem(false)">
      <font-awesome-icon :icon="['fas', 'plus-circle']" title="Add another"
    /></component>
  </div>
  <nav>
    <p><em>Ready to decide which is best?</em></p>
    <div class="error">
      <span v-if="!isOK"
        ><font-awesome-icon :icon="['fas', 'exclamation-circle']" /> {{ message }}</span
      >
    </div>
    <component :is="isOK ? 'router-link' : 'span'" to="/questions" @click="initialiseQuestions()"
      ><Button severity="contrast"
        >Let's go! <font-awesome-icon :icon="['fa', 'arrow-right']" /></Button
    ></component>
    <br />
  </nav>
  <div style="height: 2vh"></div>
  <div class="setup">
    <p>
      Want to play? Try
      <Button @click="demoMode()" severity="secondary"
        >Demo mode <font-awesome-icon :icon="['fa', 'wand-magic-sparkles']"
      /></Button>
    </p>
    <br />
    <p>
      <Button @click="startOver()" severity="warn"
        >Start over<font-awesome-icon :icon="['fa', 'recycle']"
      /></Button>
    </p>
  </div>
</template>

<style>
.setup {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item {
  font-size: 125%;
  margin: 0.75ex 0;
}
</style>
