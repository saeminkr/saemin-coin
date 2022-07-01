import { createGlobalStyle } from "styled-components";
export const ThemeColor = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  transition: all 0.3s ease-in-out;
}
`;
