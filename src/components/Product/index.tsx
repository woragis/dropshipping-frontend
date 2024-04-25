import { ChangeEvent, useEffect, useState } from 'react'
import { backendUriPrefix } from '../../config'
import { ProductComponentProps } from '../../types/Products'
import {
  ProductDescription,
  ProductInfo,
  ProductPicture,
  ProductPrice,
  ProductTitle,
  StyledProductComponent,
} from './style'

export const StoreProduct = ({
  _id,
  title,
  price,
  description,
}: ProductComponentProps) => {
  return (
    <StyledProductComponent key={_id}>
      <ProductPicture />
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>R$ {price}</ProductPrice>
        <ProductDescription>
          <p>{description}</p>
        </ProductDescription>
      </ProductInfo>
    </StyledProductComponent>
  )
}

export const AdminProduct = ({
  _id,
  title,
  price,
  description,
}: ProductComponentProps) => {
  const [productData, setProductData] = useState<ProductComponentProps>({
    _id: _id,
    title: title,
    price: price,
    description: description,
  })
  const [editMode, setEditMode] = useState<boolean>(false)
  const [deleted, setDeleted] = useState<boolean>(false)
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductData({ ...productData, [event.target.id]: event.target.value })
  }
  const getProduct = () => {
    try {
      const backendUri = backendUriPrefix + 'products/'
      fetch(backendUri, {
        method: 'POST',
        body: JSON.stringify({ _id: _id }),
      })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

  const editProduct = () => {
    console.log(productData)
    setEditMode((prevState) => !prevState)
  }
  const updateProduct = () => {
    try {
      const token = localStorage.getItem('token')
      const backendUri = backendUriPrefix + 'products/edit'
      fetch(backendUri, {
        method: 'PUT',
        body: JSON.stringify(productData),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
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
        a
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
        <button onClick={editProduct}>Cancel</button>
        <button onClick={updateProduct}>Edit</button>
      </ProductInfo>
    )
  }
  return (
    <>
      {!deleted && (
        <StyledProductComponent key={_id}>
          <ProductPicture />
          {!editMode && (
            <ProductInfo>
              <ProductTitle>{title}</ProductTitle>
              <ProductPrice>R$ {price}</ProductPrice>
              <ProductDescription>
                <p>{description}</p>
              </ProductDescription>
              <button onClick={editProduct}>Edit</button>
              <button onClick={deleteProduct}>Delete</button>
            </ProductInfo>
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

export const CartProduct = () => {
  return <></>
}
