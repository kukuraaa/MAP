export interface Article {
  id: string
  title: string
  slug: string
  category: string
  date: string
  readTime: string
  author: {
    name: string
    avatar?: string
    role?: string
  }
  featuredImage: string
  excerpt: string
  content: string
  tags?: string[]
}
