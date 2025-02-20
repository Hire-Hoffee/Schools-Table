import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { APIResponse, SchoolData } from '@/types/schoolRecords'

export const useSchoolsRecordsStore = defineStore('schoolsRecords', () => {
  const schoolsRecords = ref<SchoolData[] | null>(null)

  async function fetchSchoolsRecords() {
    const res = await fetch('https://schooldb.skillline.ru/api/schools?count=10')
    schoolsRecords.value = ((await res.json()) as APIResponse).data.list
  }

  return { schoolsRecords, fetchSchoolsRecords }
})
