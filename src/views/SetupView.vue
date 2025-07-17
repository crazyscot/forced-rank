<script setup lang="ts">
import SetupItem from '@/components/SetupItem.vue'
import { state } from '../state.ts'

function onUpdated(idx: number, value: string) {
  state.items[idx] = value
  //console.log('UPDATE #' + idx + ' -> ' + value)
  //console.log(state.items)
}
function addItem() {
  state.items.push('')
  //console.log('ADD; len is now ' + state.items.length)
  //console.log(state.items)
}
function deleteItem(idx: number) {
  state.items.splice(idx, 1)
  //console.log('DELETE #' + idx + ': len is now ' + state.items.length)
  //console.log(state.items)
}
</script>

<template>
  <div class="setup">
    <h1>The items to rank</h1>

    <ul>
      <SetupItem
        v-for="(value, index) in state.items"
        :modelValue="value"
        :key="index"
        v-bind:record="state.items[index]"
        @update:model-value="(v) => onUpdated(index, v)"
        @delete="deleteItem(index)"
      />
    </ul>
    <a @click="addItem()">
      <font-awesome-icon :icon="['fas', 'plus-circle']" />
    </a>
  </div>
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
