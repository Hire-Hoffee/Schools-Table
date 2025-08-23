<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import CustomButton from './CustomButton.vue'

const emit = defineEmits<{
  getDate: [date: Date | null | '-1']
}>()

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]
const weekdays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

const currentYear = ref(new Date().getFullYear())
const currentMonth = ref(new Date().getMonth())
const currentDay = ref<number | null>(null)
const isDateSelected = ref(false)
const openCalendar = ref(false)

const selectedDate = computed(() => {
  if (!isDateSelected.value || currentDay.value === null) {
    return null
  }
  return new Date(currentYear.value, currentMonth.value, currentDay.value)
})

const displayText = computed(() => {
  if (!isDateSelected.value || !selectedDate.value) {
    return 'Выберите дату'
  }
  return selectedDate.value.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
})

const lastMonthDays = computed(() => {
  const lastDays = []
  for (let i = 0; i < new Date(currentYear.value, currentMonth.value, 1).getDay(); i++) {
    lastDays.push(new Date(currentYear.value, currentMonth.value, 0 - i).getDate())
  }
  return lastDays.reverse()
})

const newMonthDays = computed(() => {
  return 6 - new Date(currentYear.value, currentMonth.value + 1, 0).getDay()
})

const selectMonth = (toDo: 'plus' | 'minus') => {
  if (toDo === 'plus') {
    currentMonth.value = currentMonth.value === 11 ? 0 : currentMonth.value + 1
  }
  if (toDo === 'minus') {
    currentMonth.value = currentMonth.value === 0 ? 11 : currentMonth.value - 1
  }
}

const selectDate = async () => {
  if (currentDay.value !== null) {
    isDateSelected.value = true
    emit('getDate', selectedDate.value)
    openCalendar.value = false
  }
}

const cancelSelection = () => {
  emit('getDate', '-1')
  isDateSelected.value = false
  openCalendar.value = false
}

const selectDay = (day: number) => {
  currentDay.value = day
}

watch(currentMonth, (newMonth, oldMonth) => {
  if (newMonth === 0 && oldMonth === 11) {
    currentYear.value += 1
  }
  if (newMonth === 11 && oldMonth === 0) {
    currentYear.value -= 1
  }
})
</script>

<template>
  <div class="input-wrapper">
    <div class="date-input-container">
      <div class="date-input" @click="openCalendar = true">
        {{ displayText }}
      </div>
      <img src="@/assets/images/calendar.svg" alt="calendar" class="calendar-icon" />
    </div>
    <div class="main-container" v-if="openCalendar">
      <div class="title">
        <p><strong>Выбрать период</strong></p>
        <hr />
      </div>
      <div class="year-selection">
        <img src="@/assets/images/arrow_left.svg" alt="left" @click="() => selectMonth('minus')" />
        <p>{{ months[currentMonth] }} {{ currentYear }}</p>
        <img src="@/assets/images/arrow_right.svg" alt="left" @click="() => selectMonth('plus')" />
      </div>
      <div class="dates-container">
        <div class="weekdays-container">
          <div v-for="weekday in weekdays" :key="weekday" class="weekday">
            <span> {{ weekday }}</span>
          </div>
        </div>
        <div class="days-container">
          <div v-for="emptyDay in lastMonthDays" :key="emptyDay" class="empty-day">
            <span>{{ emptyDay }}</span>
          </div>
          <div
            v-for="day in new Date(currentYear, currentMonth + 1, 0).getDate()"
            :key="day"
            class="day"
            :style="currentDay === day ? { backgroundColor: '#33D35E' } : {}"
            @click="() => selectDay(day)"
          >
            <span>{{ day }}</span>
          </div>
          <div v-for="emptyDay in newMonthDays" :key="emptyDay" class="empty-day">
            <span>{{ emptyDay }}</span>
          </div>
        </div>
      </div>
      <div class="buttons-container">
        <CustomButton text="Отмена" class="cancel" @click="cancelSelection" />
        <CustomButton text="Сохранить" class="save" @click="selectDate" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-wrapper {
  position: relative;
  width: 100%;

  .date-input-container {
    position: relative;
    width: 100%;

    .calendar-icon {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
    }

    .date-input {
      width: 100%;
      position: relative;
      padding: 18px;
      border-radius: 10px;
      border: 1px solid #eee;
      font-size: 16px;
      cursor: pointer;

      &:focus {
        outline: 1px solid #ddd;
      }
    }
  }
}

.main-container {
  position: absolute;
  top: -5px;
  left: -5px;
  padding: 24px;
  user-select: none;
  background-color: #f1f4fd;
  border-radius: 16px;
  z-index: 9999;

  .title {
    margin-bottom: 16px;
  }
}

.year-selection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  & > img {
    cursor: pointer;
    transition: 0.2s;
  }
  & > img:hover {
    opacity: 0.5;
  }
}

.dates-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.weekdays-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
  column-gap: 13px;

  .weekday {
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.days-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 10px;
  column-gap: 13px;

  .day {
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #c3fcd2;
    }
  }

  .empty-day {
    opacity: 0.5;
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.buttons-container {
  display: flex;
  justify-content: space-between;

  .cancel {
    background-color: transparent;
    border: 1px solid #000;
  }
  .save {
    background-color: #000;
    color: #fff;
  }
}
</style>
