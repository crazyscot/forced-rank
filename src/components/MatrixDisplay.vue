<script setup lang="ts">
import { state } from '../state.ts'
import MatrixCell from './MatrixCell.vue'
</script>

<template>
  <table class="matrix" v-if="state.matrix.length">
    <thead>
      <tr>
        <td></td>
        <td></td>
        <!-- omit the last column as it contains no valid data -->
        <th class="vert" v-for="(value, i) in state.items.slice(0, -1)" :key="i">
          {{ i + 1 }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, i) in state.items" :key="i">
        <th class="horiz headL">#{{ i + 1 }}</th>
        <th class="horiz headR">{{ value }}</th>
        <!-- omit the last column again -->
        <MatrixCell
          v-for="(_, j) in state.items.slice(0, -1)"
          :key="j"
          :cell-state="state.matrix[i + 0][j]"
        />
      </tr>
    </tbody>
  </table>
  <p>
    <em
      >Rows and columns are the items, referenced by id#. Each cell shows the id of the winner.</em
    >
  </p>
</template>

<style>
.matrix {
  border-collapse: collapse;
  overflow-x: auto;
  th.horiz {
    border: 1px solid var(--color-border-hover);
    color: var(--color-heading);
  }
  .headL {
    border-right: 0px !important;
  }
  .headR {
    border-left: 0px !important;
  }
  th.vert {
    border: 1px solid var(--color-border-hover);
    padding: 0.5ex 0.5em;
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
