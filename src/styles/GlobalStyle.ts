
import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#000000",
  secondary: "#CCCCCC",
  third: "#DAA520",
  thirdLight: "#FFB6C1",
  white: "#ffffff",
  black: "#000000",
  success: "#008080",
  danger: "#FF0000"
}
