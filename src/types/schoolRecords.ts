export type Status = {
  name: string | null
  code: string | null
}

export type ContactInfo = {
  post_address: string
  phone: string
  fax: string | null
  email: string
  website: string | null
}

export type LegalInfo = {
  ogrn: string
  inn: string
  kpp: string | null
}

export type Head = {
  post: string
  name: string
}

export type OrganizationType = {
  name: string | null
  code: string | null
}

export type EducationalLevel = {
  name: string
  short_name: string | null
  code: string | null
}

export type EducationalProgram = {
  uuid: string
  type: OrganizationType
  kind: OrganizationType
  edu_level: EducationalLevel
  edu_sub_level: OrganizationType
  edu_normative_period: string | null
  program: {
    name: string | null
    code: string | null
  }
  okso_code: string | null
  ugs: {
    name: string | null
    code: string | null
  }
  qualification: string | null
  is_accredited: boolean
  is_canceled: boolean
  is_suspended: boolean
}

export type EduOrganization = {
  uuid: string
  full_name: string
  short_name: string
  head_edu_org_id: string | null
  is_branch: boolean
  contact_info: ContactInfo
  legal_info: LegalInfo
  head: Head
  form: OrganizationType
  kind: OrganizationType
  type: OrganizationType
  region: {
    name: string
    code: number
  }
  federal_district: {
    name: string
    short_name: string
    code: string
  }
}

export type Supplement = {
  uuid: string
  number: string
  is_for_branch: boolean
  form_number: string | null
  serial_number: string | null
  note: string | null
  status: Status
  edu_org: EduOrganization
  educational_programs: EducationalProgram[]
}

export type SchoolData = {
  uuid: string
  is_federal: boolean
  reg_number: string
  serial_number: string | null
  form_number: string | null
  issue_date: string
  end_date: string | null
  regulatory: string
  status: Status
  type: OrganizationType
  created_at: string
  updated_at: string
  edu_org: EduOrganization
  supplements: Supplement[]
}

export type APIResponse = {
  status: boolean
  message: string
  data: {
    pages_count: number
    page: number
    total_count: number
    list: SchoolData[]
  }
}
