<script setup>
import { ref, provide, onMounted } from 'vue'

const props = defineProps({
  headers: {
    type: Array,
    required: true
  },
  dataSource: {
    type: Array,
    required: true
  }
})

const tasksList = ref([])

function addRow(rowData) {
  tasksList.value.push(rowData)
}

onMounted(() => {
  tasksList.value = tasksList.value.concat(props.dataSource)
  provide('addRow', addRow)
})
</script>

<template>
  <table>
    <thead v-if="props.headers">
      <tr>
        <td v-for="header in props.headers" :key="header">{{ header }}</td>
      </tr>
    </thead>
    <tbody v-if="props.dataSource">
      <tr v-for="task in tasksList" :key="task.Id">
        <td v-for="field in Object.keys(task)" :key="`task-${task.Id}-${field}`">
          {{ task[field] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid dodgerblue;

  thead {
    background-color: #dadada;
  }
  td,
  th {
    border: 1px solid dodgerblue;
  }
}
</style>
