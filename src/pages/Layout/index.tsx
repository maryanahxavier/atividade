import { MenuComponent, } from "components";
import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "./styles";

const Layout = () => {
  return (
    <S.Layout>
      <MenuComponent />
      <main>
        <Outlet />
      </main>

    </S.Layout>
  );
};

export default Layout;
