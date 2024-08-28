export interface TCommonFetcher<T = any> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}
export interface TMenu {
  link?: string
  title: string
}
export interface TStatement {
  id: number
  full_name: string
  position: string
  image: string
  statement: string
}

export interface TContacts {
  id: number
  location: string
  email: string
  phone_number: string
  map_location: string
}
