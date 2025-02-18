<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Тестовое задание</h1>
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/uikit">Компоненты</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
