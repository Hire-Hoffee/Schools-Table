export type FederalDistrict = {
  id: number
  name: string
  short_name: string
  code: string
}

export type Region = {
  id: number
  name: string
}

export type ApiResponseDistricts = {
  status: boolean
  message: string
  data: FederalDistrict[]
}

export type ApiResponseRegions = {
  status: boolean
  message: string
  data: Region[]
}
