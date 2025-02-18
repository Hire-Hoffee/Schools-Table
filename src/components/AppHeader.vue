<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Тестовое задание</h1>
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/uikit">Компоненты</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #000;
  height: 100px;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  h1 {
    font-weight: bold;
  }

  nav {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      color: #fff;
      transition: 0.2s;
    }
    a:hover {
      opacity: 0.8;
      transition: 0.2s;
    }

    .router-link-active {
      font-weight: bold;
    }
  }
}
</style>
