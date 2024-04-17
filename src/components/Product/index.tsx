import React from 'react'
import {
  ProductDescription,
  ProductInfo,
  ProductPicture,
  ProductPrice,
  ProductTitle,
  StyledProductComponent,
} from './style'

interface ProductComponentProps {
  Title: string
  Price: number
  Description: string
}

const ProductComponent = ({
  Title,
  Price,
  Description,
}: ProductComponentProps) => {
  return (
    <StyledProductComponent>
      <ProductPicture />
      <ProductInfo>
        <ProductTitle>{Title}</ProductTitle>
        <ProductPrice>R$ {Price}</ProductPrice>
        <ProductDescription>
          <p>{Description}</p>
        </ProductDescription>
      </ProductInfo>
    </StyledProductComponent>
  )
}

export default ProductComponent
