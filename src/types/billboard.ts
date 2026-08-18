export interface Billboard {
  id: string
  title: string
  location: string
  address: string
  status: 'Tersedia' | 'Terisi' | 'Segera Tersedia'
  code: string
  size: string
  lighting: string
  view: string
  type: string
  trafficDaily: {
    cars: string
    motorcycles: string
    pedestrians?: string
  }
  images: string[]
  description: string
  priceEstimation?: string
}
