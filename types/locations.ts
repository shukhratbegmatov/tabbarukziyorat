import { EReligion } from '~/types/religions'

export interface ILocation {
  id?: number
  name: string
  location: string
  image: string
  religion: EReligion
  latitude: number
  longitude: number
}

export interface TLocation {
  name: string
  location: string
  image: string
}
