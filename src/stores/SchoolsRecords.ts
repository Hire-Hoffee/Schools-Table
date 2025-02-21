import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { APIResponse, SchoolData } from '@/types/schoolRecords'

export const useSchoolsRecordsStore = defineStore('schoolsRecords', () => {
  const schoolsRecords = ref<SchoolData[] | null>(null)
  const count = ref('10')
  const page = ref(1)
  const totalPages = ref<number | undefined>(undefined)

  const fetchSchoolsRecords = async () => {
    const res = await fetch(
      `https://schooldb.skillline.ru/api/schools?count=${Number(count.value)}&page=${page.value}`,
    )
    const result = ((await res.json()) as APIResponse).data
    schoolsRecords.value = result.list
    totalPages.value = result.pages_count
  }

  const updateCount = (value: string) => (count.value = value)
  const updatePage = (value: number) => (page.value = value)

  return { schoolsRecords, count, page, totalPages, fetchSchoolsRecords, updateCount, updatePage }
})
