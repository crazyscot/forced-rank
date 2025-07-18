<script setup lang="ts">
import { state } from '../state.ts'
import MatrixCell from './MatrixCell.vue'
</script>

<template>
  <table class="matrix" v-if="state.matrix.length">
    <thead>
      <tr>
        <td></td>
        <!-- omit the last column as it contains no valid data -->
        <th class="vert" v-for="(value, i) in state.items.slice(0, -1)" :key="i">
          {{ i + 1 }} {{ value }}
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- omit the first row as it contains no valid data -->
      <tr v-for="(value, i) in state.items.slice(1)" :key="i">
        <th class="horiz">{{ i + 2 }} {{ value }}</th>
        <!-- omit the last column again -->
        <MatrixCell
          v-for="(_, j) in state.items.slice(0, -1)"
          :key="j"
          :cell-state="state.matrix[i + 1][j]"
        />
      </tr>
    </tbody>
  </table>
</template>

<style>
.matrix {
  border-collapse: collapse;
  overflow-x: auto;
  th.horiz {
    border: 1px solid var(--color-border-hover);
    color: var(--color-heading);
  }
  /* text colour! maybe alternate? */
  th.vert {
    border: 1px solid var(--color-border-hover);
    rotate: -90deg;
    padding: 0.5em 0.5ex; /* yes these are backwards */
  }
  td.valid {
    background: var(--color-background-soft);
    color: var(--color-heading);
    border: 1px solid var(--color-border);
  }
  td.answered {
    color: var(--color-text);
    background: var(--color-background-mute);
    border: 1px solid var(--color-border);
  }
  td.invalid {
    background: var(--color-text);
    opacity: 50%;
  }
  th,
  td {
    padding: 0.5ex 0.5em;
    text-align: center;
  }
}
</style>
