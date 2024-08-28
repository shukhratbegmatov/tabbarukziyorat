export const religions = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Islam',
    value: 'islam',
    icon: '/rel_icons/islam.svg',
  },
  {
    title: 'Christianity',
    value: 'christianity',
    icon: '/rel_icons/christianity.svg',
  },
  {
    title: 'Buddhism',
    value: 'buddhism',
    icon: '/rel_icons/buddhism.svg',
  },
]
export const countries = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Uzbekistan',
    value: 1,
    icon: '/rel_icons/islam.svg',
  },
  {
    title: 'Turkmenistan',
    value: 2,
  },
  {
    title: 'Türkiye',
    value: 3,
  },
]
export function mapFilter(t: (s: string) => string, options: any) {
  return [
    {
      label: t('choose_religion'),
      name: 'religion',
      labelKey: 'title',
      valueKey: 'id',
      options: options?.religion,
    },
    {
      label: t('choose_country'),
      name: 'country',
      labelKey: 'title',
      valueKey: 'id',
      options: options?.country,
    },
  ]
}
