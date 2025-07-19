<script setup lang="ts">
import type { Question } from '../state.ts'

const props = defineProps<{
  q: Question
}>()
</script>

<template>({{ props.q.first }}, {{ props.q.second }}) &nbsp;</template>
