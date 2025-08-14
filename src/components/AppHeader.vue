<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ErrorInfo from '@/components/ErrorInfo.vue'
import { useSchoolsRecordsStore } from '@/stores/schoolsRecords'

const schoolsStore = useSchoolsRecordsStore()
</script>

<template>
  <header>
    <h1>Тестовое задание</h1>
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/uikit">Компоненты</RouterLink>
      <RouterLink to="/explanation">Комментарии</RouterLink>
    </nav>
    <ErrorInfo v-if="schoolsStore.errorMessage" :message="schoolsStore.errorMessage" />
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #0e0e10;
  height: 100px;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  position: relative;

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
    }

    .router-link-active {
      font-weight: bold;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    height: 110px;
    h1 {
      font-size: 24px;
    }
  }
}
</style>
