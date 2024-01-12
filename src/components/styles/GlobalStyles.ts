import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: ${({ theme }) => theme.typography.contentFontFamily};
  font-size: ${({ theme }) => theme.typography.contentSize};
  font-weight: ${({ theme }) => theme.typography.contentWeight}
}

body {
  margin: 0;
  scroll-behavior: smooth;
  color:${({ theme }) => theme.colors.contentColor};
  background-color: ${({ theme }) => theme.colors.background}
}

p{
  margin:0;
  line-height: 30px;
  font-weight: 100;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  font-size: 20px;
}

button {
  padding: 5px 10px;
  background: none;
  border: none;
  cursor:pointer;
  font-size:inherit;
  border-radius: 5px;
  margin: 10px 0;
}

input {
  font-family: inherit;
  padding: 10px;
  border:none;
  border-radius: 5px;
}

img {
  max-width: 100%;
}

h1,
h2 {
  margin: 0;
}

textarea {
  color: #2f2f2f;
  border-radius: 10px;
  background: #ffffffb5;
  width: 100%;
  height: 40px;
  text-align: start;
  font-size: 12px;
  outline: 0px none transparent;
}

.section{
  &__action{
    background-color: #2f2f2f;
    color: #fff;
  }
}
`;

export default GlobalStyle;
