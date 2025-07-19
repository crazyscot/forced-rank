<script setup lang="ts">
import type { Response } from '../state.ts'

const props = defineProps<{
  cellState: Response
}>()
</script>

<template>
  <td v-if="!props.cellState.valid" class="invalid"></td>
  <td v-else-if="props.cellState.answer !== undefined" class="answered">
    {{ props.cellState.answer + 1 }}
  </td>
  <td v-else class="valid">?</td>
</template>
