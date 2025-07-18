<script setup lang="ts">
import { computed } from 'vue'
import type { Response } from '../state.ts'

const props = defineProps<{
  cellState: Response
}>()
const valid = computed(() => {
  return props.cellState.valid
})
const answered = computed(() => {
  return valid.value && props.cellState.answer !== undefined
})
</script>

<template>
  <td v-if="!valid" class="invalid"></td>
  <td v-if="valid && !answered" class="valid">?</td>
  <!-- need to write out the answer test longhand here to avoid a TS warning -->
  <td v-if="valid && $props.cellState.answer !== undefined" class="answered">
    {{ $props.cellState.answer + 1 }}
  </td>
</template>
