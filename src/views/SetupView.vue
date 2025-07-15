<script setup lang="ts">
import SetupItem from '@/components/SetupItem.vue'

defineEmits(['item'])

const props = defineProps({
  items: {
    type: Array<string>,
    required: true,
    default: ['foo', 'bar'],
  },
})

function onUpdated(idx: number, value: string) {
  console.log('UPDATE: ' + idx + ' -> ' + value)
  this.$emit('item', idx, value)
  console.log(props.items)
}
</script>

<template>
  <div class="setup">
    <h1>This is a setup page</h1>

    <ul>
      <SetupItem
        v-for="(value, index) in items"
        :modelValue="value"
        :key="index"
        v-bind:record="items[index]"
        @update:model-value="(v) => onUpdated(index, v)"
      />
    </ul>
    <p>That is all.</p>
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

<!-- TODO:
 Prop editing... need to have the parent own and update the global state?

 Add, Remove, Edit ... Look at https://vuejs.org/guide/essentials/event-handling
 "the child should emit an event to let the parent perform the mutation" https://vuejs.org/guide/components/events.html
 -->
