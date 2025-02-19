<script setup lang="ts">
import DataCount from './DataCount.vue'
import PaginationBar from './PaginationBar.vue'
</script>

<template>
  <div class="pagination-container">
    <PaginationBar />
    <DataCount />
  </div>
</template>

<style scoped lang="scss">
.pagination-container {
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #687588;
}
</style>
