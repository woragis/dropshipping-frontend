import styled from "styled-components";

export const StyledProductComponent = styled.div`
  background-color: gray;
  border: 1px solid red;
  display: inline-block;
  display: grid;
  grid-template-rows: 200px 150px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: min-content;
  height: 350px;
  padding: 10px;
`

export const ProductPicture = styled.img`
  border: 1px solid red;
  height: 200px;
  width: 200px;
  display: block;
`

export const ProductInfo = styled.div`
  height: 100%;
  width: 200px;
  margin-top: -20px;
  display: flex;
  flex-flow: column;
  padding-bottom: 10px;
`

export const ProductTitle = styled.h4`
  font-size: 1.3em;
`

export const ProductDescription = styled.div`
  overflow: hidden;
  height: 100px;
  width: 200px;
  position: relative;

  &:hover {
    overflow: initial;
    p {
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;
      border-radius: 5px;
    }
  }
`

export const ProductPrice = styled.p`
  font-size: 1.5em;
  line-height: 20px;
  margin: -10px 0 0;
  color: green;
  font-weight: bold;
`