import styled from 'styled-components'

export const StyledRowComponent = styled.article`
  width: 100%;
  height: 300px;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  overflow-x: scroll;
  position: relative;
`

export const RowProduct = styled.div`
  width: 100%;
  min-width: 150px;
  height: 100%;
  background-color: red;
`
