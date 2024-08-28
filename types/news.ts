export interface TNews {
  id: number
  title: string
  slug: string
  short_description: string
  image: string
  published_at: string
}

export interface TNewsSingle {
  id: number
  title: string
  image: string
  slug: string
  description: string
  short_description: string
  published_at: string
  view_count: number
}
