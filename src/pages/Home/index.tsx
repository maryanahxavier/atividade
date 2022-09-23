import React from "react";

import Sol from "assets/img/Sol.png"
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";


const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={Sol} alt="Imagens principais" />
      </picture>
    </S.Home>
  );
};

export default Home;
