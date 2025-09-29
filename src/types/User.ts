import { Product } from "./Product"
import { Category } from "./Category"

export type User = {
  menu: Product[]
  username: string
  categories: Category[]
}
