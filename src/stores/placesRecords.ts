import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {
  ApiResponseDistricts,
  ApiResponseRegions,
  FederalDistrict,
  Region,
} from '@/types/placesRecords'

export const usePlacesRecordsStore = defineStore('placesRecords', () => {
  const regions = ref<Region[] | undefined>(undefined)
  const districts = ref<FederalDistrict[] | undefined>(undefined)

  const fetchRegions = async () => {
    const res = await fetch(import.meta.env.VITE_API_URL + '/regions')
    const result = (await res.json()) as ApiResponseRegions
    regions.value = result.data
  }

  const fetchDistricts = async () => {
    const res = await fetch(import.meta.env.VITE_API_URL + '/federalDistricts')
    const result = (await res.json()) as ApiResponseDistricts
    districts.value = result.data
  }

  return { regions, districts, fetchRegions, fetchDistricts }
})
