// import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom"
// import useFoodOrder from "../../hooks/foodOrderHooks";

const Header = () => {
  // const { getUser } = useFoodOrder();
  // const [usernameForSearch, setUsernameForSearch] = useState();

  // const submitGetUser = () => {
  //   if (!usernameForSearch) {
  //     return;
  //   };
  //   return getUser(usernameForSearch);
  // }

  return (
    <header>
      <S.Wrapper>
        <div>
          <Link to="/">
            <button type="button">
              Home
            </button>
          </Link>
          <Link to="/cart">
            <button type="button">
              Cardápio
            </button>
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Digite o produto para pesquisa"
          // onChange={(e) => setUsernameForSearch(e.target.value)}
          />
          <button
            type="submit"
          // onClick={submitGetUser}
          >
            Buscar
          </button>
        </div>
      </S.Wrapper>
    </header>
  );
};

export default Header;
