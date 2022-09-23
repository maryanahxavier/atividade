import React from "react";

import Sol from "assets/img/soltexto.png"
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";
import entrar from "assets/img/entar.png"


const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={Sol} alt="Imagens principais" />
        <a href = "https://youtu.be/7o1FzLpRUKQ">
         <img src={entrar} alt="entrar" className="entrar" />
         </a>
      </picture>
    </S.Home>
  );
};

export default Home;
