import { RowComponent } from '../RowComponent'
export const Cart = () => {
  const cartItems = [{ title: 'fone', price: 'oi' }]
  const CartItems = cartItems.map(({ title, price }) => {
    return (
      <div>
        {title}, {price}
      </div>
    )
  })
  const CartComponent = () => {
    return <>{CartItems}</>
  }
  return <RowComponent children={<CartComponent />} />
}
