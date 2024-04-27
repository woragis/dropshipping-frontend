import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    font-size: 15px;
  }
  main {
    min-height: calc(100vh - 180px);
  }
`

export default GlobalStyles
