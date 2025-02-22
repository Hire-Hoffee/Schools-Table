<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSchoolsRecordsStore } from '@/stores/schoolsRecords'
import { debounce } from 'lodash-es'

const schoolsStore = useSchoolsRecordsStore()

const currentPage = ref(1)
const lastPage = ref(schoolsStore.totalPages || 1)
const pages = ref([2, 3, 4])

const updatePages = () => {
  if (currentPage.value <= 2) {
    pages.value = [2, 3, 4]
  } else if (currentPage.value >= lastPage.value - 1) {
    pages.value = [lastPage.value - 3, lastPage.value - 2, lastPage.value - 1]
  } else {
    pages.value = [currentPage.value - 1, currentPage.value, currentPage.value + 1]
  }
}

const setPage = (value: number) => {
  if (value >= 1 && value <= lastPage.value) {
    currentPage.value = value
    updatePages()
  }
}

const countUp = debounce(() => setPage(currentPage.value + 1), 300)
const countDown = debounce(() => setPage(currentPage.value - 1), 300)

const goToPage = () => {
  const input = prompt('Введите номер страницы:')
  const pageNumber = parseInt(input || '', 10)
  if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= lastPage.value) {
    setPage(pageNumber)
  }
}

watch(currentPage, (newValue) => schoolsStore.updatePage(newValue.toString()))
watch(
  () => schoolsStore.totalPages,
  (newValue) => (lastPage.value = newValue!),
)
</script>

<template>
  <div class="bar-container">
    <div class="arrow" @click="countDown">&lt;</div>
    <div class="numbers">
      <span :class="{ active: currentPage === 1 }" @click="setPage(1)">1</span>
      <span class="dots" v-if="pages[0] > 2" @click="goToPage">...</span>
      <span
        v-for="value in pages"
        :key="value"
        :class="{ active: currentPage === value }"
        @click="setPage(value)"
      >
        {{ value }}
      </span>
      <span class="dots" v-if="pages[pages.length - 1] < lastPage - 1" @click="goToPage">...</span>
      <span :class="{ active: currentPage === lastPage }" @click="setPage(lastPage)">{{
        lastPage
      }}</span>
    </div>
    <div class="arrow" @click="countUp">&gt;</div>
  </div>
</template>

<style scoped lang="scss">
.bar-container {
  display: flex;
  align-items: center;
  gap: 24px;
  user-select: none;

  .arrow {
    padding: 10px 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #eee;
    }
  }

  .numbers {
    display: flex;
    align-items: center;
    gap: 2px;

    span {
      border-radius: 8px;
      padding: 10px 15px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #eee;
      }
    }

    .active {
      background-color: #f0f0f7;
    }

    .dots {
      border: none;
      cursor: pointer;
      font-weight: bold;
    }
  }
}

@media (max-width: 600px) {
  .bar-container {
    gap: 5px;

    .arrow {
      padding: 8px 12px;
    }

    .numbers {
      span {
        padding: 8px 12px;
      }
    }
  }
}
</style>
