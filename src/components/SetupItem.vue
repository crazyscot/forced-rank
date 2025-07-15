<script setup lang="ts">
const modelValue = defineModel<string>({ required: true })
</script>

<template>
  <div>
    <input v-model="modelValue" placeholder="edit me" />
  </div>
</template>
