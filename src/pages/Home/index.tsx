import React from "react";
import capa from "assets/img/image2.png";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";

const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={capa} alt="Imagens principais" />
      </picture>

    </S.Home>
  );
};

export default Home;
