<script setup lang="ts">
import { Result, options } from '../state.ts'

defineProps<{
  index: number
  item: Result
}>()
</script>

<template>
  <tr class="item">
    <td class="place">
      {{ item.place }}
    </td>
    <td class="item">
      {{ item.item }}
    </td>
    <td v-if="options.show_scores" class="score">
      {{ item.score }}
    </td>
  </tr>
</template>
