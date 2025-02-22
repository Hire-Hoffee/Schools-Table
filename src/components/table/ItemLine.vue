<script setup lang="ts">
import CheckBox from './CheckBox.vue'
import type { EducationalProgram } from '@/types/schoolRecords'
import LevelSpan from './LevelSpan.vue'

defineProps<{
  school: { region: string; title: string; address: string; level: EducationalProgram[] }
}>()
</script>

<template>
  <div class="line">
    <div>
      <CheckBox />
      <p>{{ school.region }}</p>
    </div>
    <div>
      <p>{{ school.title }}</p>
    </div>
    <div>
      <p>{{ school.address }}</p>
    </div>
    <div>
      <LevelSpan
        v-for="level in school.level"
        :key="level.uuid"
        :name="level.edu_level.name"
        :short_name="level.edu_level.short_name"
      />
    </div>
  </div>
  <hr />
</template>

<style scoped lang="scss">
.line {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 265px;
  justify-content: space-around;
  min-height: 64px;
  font-size: 14px;
  line-height: 20px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 16px;

    p {
      margin-left: 10px;
    }

    span {
      border: 1px solid #e7e7e7;
      border-radius: 8px;
      margin: 4px;
      padding: 1px 2px;
      position: relative;

      div {
        position: absolute;
        bottom: -25px;
        left: -15px;
      }
    }
  }

  @media (max-width: 820px) {
    grid-template-columns: 200px 200px 200px 150px;
  }
}

hr {
  border: none;
  height: 1px;
  background-color: #d3d3de;
}
</style>
