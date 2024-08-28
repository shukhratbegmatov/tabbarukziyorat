export enum EReligion {
  ISLAM = 'islam',
  CHRISTIANITY = 'christianity',
  BUDDHISM = 'buddhism',
  ABOUT = 'about',
}

export interface IReligion {
  content: string
  destination_country: {
    code: string
    flag: string
    id: number
    population: number
    short_description: string
    title: string
    youtube_video: null
  }
  erected_from: number
  erected_to: number
  image: string
  location: string
  region: {
    id: number
    title: string
    country: number
  }
  religion: {
    id: number
    title: string
    flag: null
    short_description: string
    population: number
  }
  short_description: string
  slug: string
  title: string
  type: string
  youtube_video: null | string
}

export interface TReligion {
  id?: number
  title?: string
  type?: string
  image?: string
  flag?: string
  short_description?: string
}
