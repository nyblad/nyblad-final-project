import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  background: #f1f1f1;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Raleway', sans-serif;
}
a {
  text-decoration: none;
}
`