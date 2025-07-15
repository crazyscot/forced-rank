<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array<string>,
    required: true,
    default: ['foo', 'bar'],
  },
})

console.log(props.items)
</script>

<template>
  <div class="setup">
    <h1>This is a setup page</h1>
    <div v-for="(value, key) in items" :key="key">#{{ key }}: {{ value }}</div>
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

<!-- HERE:
   SetupItem will be sth like:
   <p>id#{{ key }}</p>
   <input v-model="text" placeholder="edit me">
  ?

 Where do we store the data
 How do we bind to them
 Add, Remove, Edit ... Look at https://vuejs.org/guide/essentials/event-handling




 "the child should emit an event to let the parent perform the mutation" https://vuejs.org/guide/components/events.html
 How do we pass in props such that the app owns them?
 -->
