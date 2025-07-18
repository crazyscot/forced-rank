<script setup lang="ts">
import { state } from '../state.ts'
import MatrixCell from './MatrixCell.vue'
</script>

<template>
  <table class="matrix">
    <!-- header row! -->
    <tr>
      <td></td>
      <!-- omit the last column as it contains no valid data -->
      <th class="vert" v-for="(value, i) in state.items.slice(0, -1)" :key="i">
        {{ i + 1 }} {{ value }}
      </th>
    </tr>
    <!-- body -->
    <tr v-for="(value, i) in state.items.slice(1)" :key="i">
      <th class="horiz">{{ i + 2 }} {{ value }}</th>
      <!-- omit the last column again -->
      <MatrixCell
        v-for="(_, j) in state.items.slice(0, -1)"
        :key="j"
        :cell-state="state.matrix[i + 1][j]"
      />
    </tr>
  </table>
</template>
