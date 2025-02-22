<script setup lang="ts">
import ButtonInput from '@/components/input/ButtonInput.vue'
import SelectInput from '@/components/input/SelectInput.vue'
import SearchInput from '@/components/input/SearchInput.vue'
import LevelSpan from '@/components/table/LevelSpan.vue'
import ItemLine from '@/components/table/ItemLine.vue'
import { ref } from 'vue'
import type { EducationalProgram } from '@/types/schoolRecords'

const testSelect = ref('test')
const testSearch = ref('')
</script>

<template>
  <h1>Компоненты</h1>
  <div class="container">
    <ButtonInput />
    <div class="inputs">
      <SelectInput v-model="testSelect" :options="[{ label: 'test', value: 'test' }]" />
      <SearchInput v-model="testSearch" />
    </div>
    <ItemLine
      :school="{
        region: 'Тверская область',
        title: 'МБОУ «Кемецкая СОШ»',
        address: 'ул. Школьная, дом 18, с. Кемцы, Бологовский район, Тверская область, 171062',
        level: [
          { edu_level: { name: 'Основное общее образование', short_name: 'общеобразовательный' } },
        ] as EducationalProgram[],
      }"
    />
    <LevelSpan :name="'Test'" :short_name="'Test'" />
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: bold;
}

.container {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;

  .inputs {
    display: flex;
    gap: 50px;
  }
}
</style>
