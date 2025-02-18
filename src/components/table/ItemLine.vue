<script setup lang="ts">
import CheckBox from './CheckBox.vue'
</script>

<template>
  <div class="line">
    <div>
      <CheckBox />
      <p>Белгородская область</p>
    </div>
    <div>
      <p>МБОУ Средняя общеобразовательная школа №2</p>
    </div>
    <div>
      <p>ул. Николая Гондатти, д. 13 ул. Н. Гондатти 13 ; ул. Н. Зелинского 22</p>
    </div>
    <div>
      <span>Среднее</span> <span>Высшее</span> <span>Специальное</span> <span>Бакалавр</span>
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
    }
  }
}

hr {
  border: none;
  height: 1px;
  background-color: #d3d3de;
}
</style>
