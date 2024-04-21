export interface ProductComponentProps {
  title: string
  price: number
  description: string
}

export interface EditProductProps {
  _id: string
  title: string
  price: string
  description: string
}
export interface DeleteProductProps {
  _id: string
}
