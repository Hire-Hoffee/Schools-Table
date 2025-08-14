import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { APIResponse, SchoolData } from '@/types/schoolRecords'

export const useSchoolsRecordsStore = defineStore('schoolsRecords', () => {
  const schoolsRecords = ref<SchoolData[] | []>([])
  const count = ref('10')
  const page = ref('1')
  const totalPages = ref<number>(1)
  const totalCount = ref<number>(1)
  const selectedRegionId = ref('-1')
  const selectedDistrictId = ref('-1')
  const selectedDate = ref('')
  const isSchoolsLoading = ref(false)
  const errorMessage = ref('')

  const fetchSchoolsRecords = async () => {
    isSchoolsLoading.value = true
    const params = new URLSearchParams()

    params.append('count', count.value)
    params.append('page', page.value)

    if (selectedDistrictId.value !== '-1') {
      params.append('federal_district_id', String(selectedDistrictId.value))
    }
    if (selectedRegionId.value !== '-1') {
      params.append('region_id', String(selectedRegionId.value))
    }
    if (selectedDate.value !== '' && selectedDate.value !== '-1') {
      console.log(selectedDate.value)

      params.append('updated_at', selectedDate.value)
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/schools?${params}`)

      if (!res.ok) {
        throw new Error(`Ошибка: ${res.statusText}`)
      }

      const result = ((await res.json()) as APIResponse).data

      schoolsRecords.value = result.list
      totalPages.value = result.pages_count
      totalCount.value = result.total_count
      isSchoolsLoading.value = false
      errorMessage.value = ''
    } catch (error) {
      isSchoolsLoading.value = false
      if (error instanceof Error) {
        errorMessage.value = error.message
      } else {
        errorMessage.value = 'Произошла неизвестная ошибка'
      }
    }
  }

  const updateCount = (value: string) => (count.value = value)
  const updatePage = (value: string) => (page.value = value)
  const updateRegionId = (value: string) => (selectedRegionId.value = value)
  const updateDistrictId = (value: string) => (selectedDistrictId.value = value)
  const updateDate = (value: string) => (selectedDate.value = value)

  return {
    schoolsRecords,
    count,
    page,
    totalPages,
    totalCount,
    selectedRegionId,
    selectedDistrictId,
    isSchoolsLoading,
    selectedDate,
    errorMessage,
    fetchSchoolsRecords,
    updateCount,
    updatePage,
    updateRegionId,
    updateDistrictId,
    updateDate,
  }
})
