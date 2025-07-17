<script setup lang="ts">
const modelValue = defineModel<string>({ required: true })

defineEmits(['delete'])
</script>

<template>
  <div>
    <input v-model="modelValue" />
    <a @click="$emit('delete')">
      <font-awesome-icon :icon="['fas', 'trash-can']" />
    </a>
  </div>
</template>
