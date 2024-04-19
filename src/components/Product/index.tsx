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

export const Product = ({
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

export const AdminProduct = ({
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
        <button>Edit</button>
        <button>Delete</button>
      </ProductInfo>
    </StyledProductComponent>
  )
}
