import styled from "styled-components"
import capa from "assets/img/image2.png";
export const Home = styled.section`
  picture {
    background-image: url({capa})
  }
  picture > img {
    width: 100%;
  }
  aside {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 0.5rem;
  }
`
