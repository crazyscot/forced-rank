<script setup lang="ts">
import { state } from '../state.ts'
import Matrix from '@/components/MatrixDisplay.vue'
</script>

<template>
  <div class="pane">
    <h3>Debug View</h3>
    <table>
      <tr>
        <td>Items</td>
        <td>{{ state.items.length }}</td>
        <td>{{ state.items }}</td>
      </tr>
      <tr>
        <td>Questions To Go</td>
        <td>{{ state.questions.length }}</td>
        <td>{{ state.questions }}</td>
      </tr>
    </table>
    <div>
      <p>Responses</p>
      <Matrix />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .pane {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
