import styled from 'styled-components'
import { FaEdit, FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa'
import { FaPlus, FaMinus, FaXmark } from 'react-icons/fa6'

export const StyledProductComponent = styled.div`
  background-color: white;
  border: 1px solid black;
  display: inline-block;
  display: flex;
  grid-template-rows: 300px 50px 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: min-content;
  min-height: 350px;
  padding: 10px;
`

export const ProductPicture = styled.img`
  border: 2px solid black;
  height: 200px;
  width: 200px;
  display: block;
`

export const ProductInfo = styled.div`
  height: 100%;
  width: 200px;
  display: flex;
  flex-flow: column;
  padding-bottom: 10px;
`

export const ProductTitle = styled.h4`
  font-size: 1.3em;
  color: black;
`

export const ProductDescription = styled.div`
  height: 50px;
  width: 200px;
  position: relative;

  &:hover {
    overflow: initial;
    p {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 5px;
    }
  }
`

export const ProductPrice = styled.p`
  font-size: 1.6em;
  line-height: 20px;
  margin: -10px 0 0;
  color: white;
  background-color: green;
  width: max-content;
  padding: 5px;
  border-radius: 3px;
  font-weight: bold;
`

export const StyledWishlistButton = styled(FaHeart)`
  color: black;
  font-size: 2em;
  width: 40px;
  height: 40px;
  padding: 8px;
  border: 3px solid black;
  border-radius: 15px;
  transition: 200ms;
  &:hover {
    transform: scale(130%);
  }
  &:active {
    transform: scale(110%);
  }
`

export const StyledCartButton = styled(FaShoppingCart)`
  color: white;
  font-size: 2em;
  width: 40px;
  height: 40px;
  padding: 8px;
  border: 3px solid black;
  background-color: black;
  border-radius: 15px;
  transition: 200ms;
  &:hover {
    transform: scale(130%);
  }
  &:active {
    transform: scale(110%);
  }
`

export const ProductInteraction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
`

export const StyledIncrementButton = styled(FaPlus)`
  color: #ddd;
  font-size: 2em;
  width: 40px;
  height: 40px;
  padding: 8px;
  transition: 200ms;
  &:hover {
    color: #ddd;
  }
  &:active {
    color: #eee;
    background-color: black;
  }
`
export const StyledDecrementButton = styled(FaMinus)`
  color: white;
  font-size: 2em;
  width: 40px;
  height: 40px;
  padding: 8px;
  transition: 200ms;
  &:hover {
    color: #ddd;
  }
  &:active {
    color: #eee;
    background-color: black;
  }
`

export const ProductCartInteraction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-direction: row;
  border-radius: 20px;
  background-color: black;
`

export const ProductCartCount = styled.span`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  width: 20px;
  height: 100%;
`

export const AdminButtonsContainer = styled.canvas`
  height: 100px;
  width: 100px;
  background-color: black;
`

export const StyledEditProductButton = styled(FaEdit)`
  color: black;
  padding: 5px;
  font-size: 3em;
  transition: 300ms;
  width: 50px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`

export const StyledDeleteProductButton = styled(FaTrash)`
  color: black;
  padding: 5px;
  font-size: 3em;
  transition: 300ms;
  width: 50px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`

export const StyledCancelEditButton = styled(FaXmark)`
  color: black;
  padding: 5px;
  font-size: 3em;
  transition: 300ms;
  width: 50px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`
