export interface Project {
  id: string
  title: string
  client: string
  category: string
  description: string
  challenge: string
  solution: string
  specs: {
    jenis?: string
    dimensi?: string
    material?: string
    lokasi?: string
    durasiPengerjaan?: string
    [key: string]: string | undefined
  }
  images: string[]
  completedDate?: string
}
