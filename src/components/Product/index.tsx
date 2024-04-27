import { ChangeEvent, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { backendUriPrefix } from '../../config'
import { ProductComponentProps } from '../../types/Products'
import { CartProductProps } from '../../types/Products'
import {
  ProductCartCount,
  StyledCancelEditButton,
  StyledDeleteProductButton,
  StyledEditProductButton,
} from './style'
import {
  ProductCartInteraction,
  ProductDescription,
  ProductInfo,
  ProductInteraction,
  ProductPicture,
  ProductPrice,
  ProductTitle,
  StyledCartButton,
  StyledDecrementButton,
  StyledIncrementButton,
  StyledProductComponent,
  StyledWishlistButton,
} from './style'

export const StoreProduct = ({
  _id,
  title,
  price,
  description,
}: ProductComponentProps) => {
  const [cartQuantity, setCartQuantity] = useState<number>(1)
  const addToWishlist = async () => {
    try {
      const backendUri = backendUriPrefix + 'wishlist'
      const token = localStorage.getItem('token')
      const response = await fetch(backendUri, {
        method: 'POST',
        body: JSON.stringify({ _id: _id }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        alert('Item added to wishlist')
      }
    } catch (err) {
      console.error('Bad on wishlist request')
    }
  }
  const addToCart = async () => {
    try {
      const backendUri = backendUriPrefix + 'cart'
      const token = localStorage.getItem('token')
      const response = await fetch(backendUri, {
        method: 'POST',
        body: JSON.stringify({ _id: _id, quantity: cartQuantity }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        alert('Item added to cart with quantity: ' + cartQuantity)
      }
    } catch (err) {
      console.error('Bad on cart request')
    }
  }
  const incrementCartQuantity = () => {
    setCartQuantity((prevState) => prevState + 1)
  }
  const decrementCartQuantity = () => {
    setCartQuantity((prevState) => prevState - 1)
  }
  return (
    <StyledProductComponent key={_id}>
      <NavLink to={'/product/' + _id}>
        <ProductPicture />
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>R$ {price}</ProductPrice>
          <ProductDescription>
            <p>{description}</p>
          </ProductDescription>
        </ProductInfo>
      </NavLink>
      <ProductInteraction>
        <StyledWishlistButton onClick={addToWishlist} />
        <ProductCartInteraction>
          <StyledDecrementButton onClick={decrementCartQuantity} />
          <ProductCartCount>{cartQuantity}</ProductCartCount>
          <StyledIncrementButton onClick={incrementCartQuantity} />
        </ProductCartInteraction>
        <StyledCartButton onClick={addToCart} />
      </ProductInteraction>
    </StyledProductComponent>
  )
}

export const AdminProduct = ({
  _id,
  title,
  price,
  description,
}: ProductComponentProps) => {
  const [productData, setProductData] = useState<ProductComponentProps>(
    {} as ProductComponentProps
  )
  const [editMode, setEditMode] = useState<boolean>(false)
  const [deleted, setDeleted] = useState<boolean>(false)
  useEffect(() => {
    setProductData({ _id, title, price, description })
  }, [])
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductData({ ...productData, [event.target.id]: event.target.value })
  }
  const editProduct = () => {
    setEditMode((prevState) => !prevState)
  }
  const updateProduct = async () => {
    try {
      const token = localStorage.getItem('token')
      const backendUri = backendUriPrefix + 'products/edit'
      const response = await fetch(backendUri, {
        method: 'PUT',
        body: JSON.stringify(productData),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        editProduct()
        console.log('Updated product')
        alert('Updated Product')
      }
    } catch (err) {
      console.log(err)
    }
  }
  const deleteProduct = async () => {
    try {
      const token = localStorage.getItem('token')
      const backendUri = backendUriPrefix + 'products/delete'
      const response = await fetch(backendUri, {
        method: 'DELETE',
        body: JSON.stringify({ _id: _id }),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        setDeleted((prevState) => !prevState)
      }
    } catch (err) {
      console.log(err)
      alert('Error deleting product')
    }
  }
  const EditModeProduct = () => {
    return (
      <ProductInfo>
        <input
          type="text"
          placeholder="Product Name"
          value={productData.title}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productData.price}
          onChange={handleChange}
        />
        <textarea
          placeholder="Product Descripiton"
          value={productData.description}
          onChange={handleChange}
        />
        <StyledCancelEditButton onClick={editProduct} />
        <StyledEditProductButton onClick={updateProduct} />
      </ProductInfo>
    )
  }
  return (
    <>
      {!deleted && (
        <StyledProductComponent key={_id}>
          <ProductPicture />
          {!editMode && (
            <>
              <ProductInfo>
                <ProductTitle>{title}</ProductTitle>
                <ProductPrice>R$ {price}</ProductPrice>
                <ProductDescription>
                  <p>{description}</p>
                </ProductDescription>
              </ProductInfo>
              <StyledEditProductButton onClick={editProduct} />
              <StyledDeleteProductButton onClick={deleteProduct} />
            </>
          )}
          {editMode && <EditModeProduct />}
        </StyledProductComponent>
      )}
      {deleted && <></>}
    </>
  )
}

export const WishlistProduct = () => {
  return <></>
}

export const CartProduct = ({
  _id,
  title,
  price,
  description,
  quantity,
}: CartProductProps) => {
  return (
    <StyledProductComponent key={_id}>
      <NavLink to={'/product/' + _id}>
        <ProductPicture />
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>R$ {price}</ProductPrice>
        </ProductInfo>
      </NavLink>
      <ProductDescription>
        <p>{description}</p>
      </ProductDescription>
      <p>
        <strong>Quantity: </strong>
        {quantity}
      </p>
    </StyledProductComponent>
  )
}
