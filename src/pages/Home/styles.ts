import styled from "styled-components"
import capa from "assets/img/image2.png";
export const Home = styled.section`
 height:100vh;
    background-image: url(${capa});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  picture > img {
    width: 100%;
  }
  picture img.entrar{
   width: 20%;

  
  }
  picture{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  aside {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 0.5rem;
  }
`
