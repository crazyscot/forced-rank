<script setup lang="ts">
defineProps<{
  text: string
}>()
defineEmits(['clicked'])
</script>

<template>
  <tr class="question">
    <td>
      <a href="#" @click="$emit('clicked')">
        {{ text }}
      </a>
    </td>
  </tr>
</template>
