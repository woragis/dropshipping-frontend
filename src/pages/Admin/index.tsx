import { InsertProduct } from '../../components/InsertProduct'
import { AdminProducts } from '../Products'

export const Admin = () => {
  return (
    <div>
      <h1>
        Admin Page
        <InsertProduct />
        <AdminProducts />
      </h1>
    </div>
  )
}
