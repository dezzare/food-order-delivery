import React from "react";
import * as S from "./style";

const Item = ({ name, details }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperDetails>{details}</S.WrapperDetails>
    </S.Wrapper>
  )
}

export default Item;
