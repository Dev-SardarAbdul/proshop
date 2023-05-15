import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  } 

 body
{
  overflow-x: hidden !important;
  font-family: 'Poppins', sans-serif;
  font-family: 'Open Sans', sans-serif;
  
}

.product-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

`;

export default GlobalStyle;
