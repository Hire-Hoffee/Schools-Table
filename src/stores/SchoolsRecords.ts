import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { APIResponse, SchoolData } from '@/types/schoolRecords'

export const useSchoolsRecordsStore = defineStore('schoolsRecords', () => {
  const schoolsRecords = ref<SchoolData[] | null>(null)
  const count = ref('10')

  async function fetchSchoolsRecords() {
    const res = await fetch(
      `https://schooldb.skillline.ru/api/schools?count=${Number(count.value)}`,
    )
    schoolsRecords.value = ((await res.json()) as APIResponse).data.list
  }

  function updateCount(value: string) {
    count.value = value
  }

  return { schoolsRecords, count, fetchSchoolsRecords, updateCount }
})
