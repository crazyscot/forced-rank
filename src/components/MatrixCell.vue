<script setup lang="ts">
defineProps<{
  cellState: number
}>()
</script>

<template>
  <td v-if="$props.cellState < -1" class="invalid">X</td>
  <td v-if="$props.cellState == -1" class="valid">?</td>
  <td v-if="$props.cellState > -1" class="answered">{{ $props.cellState + 1 }}</td>
</template>
