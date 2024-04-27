import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: black;
  color: white;
  padding: 0 20px;
`

export const StyledLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 40px;
`

export const StyledLink = styled(NavLink)`
  padding: 15px 0;
  width: 30px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
