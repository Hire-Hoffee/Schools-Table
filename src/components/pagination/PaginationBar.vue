<script setup lang="ts"></script>

<template>
  <div class="bar-container">
    <div class="arrow">&lt;</div>
    <div class="numbers">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span class="dots">...</span>
      <span>10</span>
    </div>
    <div class="arrow">&gt;</div>
  </div>
</template>

<style scoped lang="scss">
.bar-container {
  display: flex;
  align-items: center;
  gap: 24px;

  .arrow {
    padding: 10px 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: #eee;
      transition: 0.2s;
    }
  }

  .numbers {
    display: flex;
    align-items: center;
    gap: 2px;

    span {
      border-radius: 8px;
      padding: 10px 15px;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background-color: #eee;
        transition: 0.2s;
      }
    }

    .dots {
      border: none;
    }
  }
}
</style>
