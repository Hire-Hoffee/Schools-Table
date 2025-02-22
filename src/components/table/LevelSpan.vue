<script setup lang="ts">
defineProps<{
  short_name: string | null
  name: string | null
}>()
</script>

<template>
  <span v-if="short_name" class="level">
    <span>{{ short_name }}</span>
    <div>{{ name }}</div>
  </span>
</template>

<style scoped lang="scss">
.level {
  border: 1px solid #e7e7e7;
  border-radius: 8px;
  padding: 1px 2px;
  position: relative;
  font-size: 12px;
  cursor: pointer;

  div {
    border-radius: 8px;
    padding: 4px 8px;
    background-color: #eee;
    position: absolute;
    top: -50px;
    left: 0px;
    cursor: default;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.2s,
      visibility 0.2s;
  }

  &:hover div {
    opacity: 1;
    visibility: visible;
  }
}
</style>
