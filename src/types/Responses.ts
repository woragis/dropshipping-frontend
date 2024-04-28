export interface ProductResponseInterface {
  _id: string
  title: string
  price: number
  description: string
}

export interface CartResponseInterface {
  product: ProductResponseInterface
  quantity: number
}

export interface WishlistResponseInterface {
  _id: string
  title: string
  price: number
  description: string
}

export interface UserData {
  username: string
  email: string
  password: string
}

export interface LoginResponseInterface {
  token: string
  username: string
  role: string
}
