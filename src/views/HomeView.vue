<script setup>
import TreeGrid from '@/components/TreeGrid.vue'

const data = [
  {
    Id: 121,
    Name: 'Task 1',
    Status: 'New',
    StartDate: new Date('2000/09/25').toDateString(),
    EndDate: new Date('2000/09/25').toDateString(),
    Priority: 'High'
  },
  {
    Id: 98,
    Name: 'Task 2',
    Status: 'New',
    StartDate: new Date('2024/12/14').toDateString(),
    EndDate: new Date('2024/8/10').toDateString(),
    Priority: 'High'
  }
]
const headers = ['Id', 'Name', 'Status', 'StartDate', 'EndDate', 'Priority']
</script>

<template>
  <main>
    <div class="p-4">
      <TreeGrid :data-source="data" :headers="headers" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
