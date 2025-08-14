<script setup lang="ts">
import CheckBox from './CheckBox.vue'
</script>

<template>
  <div class="header">
    <div class="item">
      <div>
        <CheckBox :isMainCheckbox="true" class="checkbox" />
        <span>Регион</span>
      </div>
      <img src="@/assets/images/sort_arrows.svg" alt="sort" />
    </div>
    <div class="item">
      <span>Название</span>
      <img src="@/assets/images/sort_arrows.svg" alt="sort" />
    </div>
    <div class="item">
      <span>Адрес</span>
      <img src="@/assets/images/sort_arrows.svg" alt="sort" />
    </div>
    <div class="item">
      <span>Уровень образования</span>
      <img src="@/assets/images/sort_arrows.svg" alt="sort" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: #f0f0f7;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 265px;
  height: 56px;
  margin-bottom: 5px;

  .item {
    align-self: center;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;

    div {
      display: flex;
      align-items: center;

      .checkbox {
        margin-right: 10px;
      }
    }

    img {
      cursor: pointer;
    }
  }

  @media (max-width: 820px) {
    grid-template-columns: 200px 200px 200px 150px;
  }
}
</style>
