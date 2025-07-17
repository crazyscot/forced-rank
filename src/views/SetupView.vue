<script setup lang="ts">
import SetupItem from '@/components/SetupItem.vue'
import { state } from '../state.ts'
import { isEmpty, uniq } from 'lodash'

let message = ''
let isOK = true

function runChecks() {
  let msg = ''
  // Uniqueness
  const deduped = uniq(state.items)
  if (deduped.length != state.items.length) {
    msg = 'All items must be unique'
  }
  // All items must be filled in
  if (state.items.some((s: string) => isEmpty(s.trim()))) {
    msg = 'All items must be filled in'
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
function addItem() {
  if (state.items.length < 15) {
    state.items.push('')
  }
  //console.log('ADD; len is now ' + state.items.length)
  //console.log(state.items)
  runChecks()
}
function deleteItem(idx: number) {
  if (state.items.length > 2) {
    state.items.splice(idx, 1)
  }
  //console.log('DELETE #' + idx + ': len is now ' + state.items.length)
  //console.log(state.items)
  runChecks()
}

runChecks()
</script>

<template>
  <nav>
    <RouterLink to="/"><font-awesome-icon :icon="['fa', 'arrow-left']" /> (Back) </RouterLink>
  </nav>
  <div class="setup">
    <h1>The items to rank</h1>

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
    <a @click="addItem()">
      <font-awesome-icon :icon="['fas', 'plus-circle']" title="Add another" />
    </a>
  </div>
  <nav>
    Ready to decide which is best?
    <div class="error">
      <span v-if="!isOK"
        ><font-awesome-icon :icon="['fas', 'exclamation-circle']" /> {{ message }}</span
      >
      <br />
    </div>
    <component :is="isOK ? 'router-link' : 'span'" to="/questions"
      >Onwards! <font-awesome-icon :icon="['fa', 'arrow-right']"
    /></component>
  </nav>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
