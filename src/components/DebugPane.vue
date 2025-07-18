<script setup lang="ts">
import { state } from '../state.ts'
import Matrix from '@/components/MatrixDisplay.vue'
</script>

<template>
  <div class="pane">
    <h3>Debug View</h3>
    <table class="data">
      <tbody>
        <tr>
          <td>Items</td>
          <td>{{ state.items.length }}</td>
        </tr>
        <tr>
          <td>Questions Outstanding</td>
          <td>{{ state.questions.length }}</td>
        </tr>
        <tr>
          <td>Current Question</td>
          <td>{{ state.questions[0] }}</td>
        </tr>
      </tbody>
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

table.data {
  border-collapse: collapse;
  td {
    border: 0px solid grey;
    padding: 0.5ex 0.5em;
  }
}
</style>
