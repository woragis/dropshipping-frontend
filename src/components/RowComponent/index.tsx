import { FC, ReactNode } from 'react'
import { RowProduct, StyledRowComponent } from './style'

export interface Props {
  children: ReactNode
}

export const RowComponent: FC<Props> = ({ children }) => {
  return (
    <StyledRowComponent>
      {children}
      <RowProduct />
      <RowProduct />
      <RowProduct />
    </StyledRowComponent>
  )
}
