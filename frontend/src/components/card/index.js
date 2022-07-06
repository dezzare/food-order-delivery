import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';
import * as S from "./style";

const Card = ({ product, children }) => {
  const cart = useSelector(state => state.cart.value)
  const dispatch = useDispatch();
  // const classes = useStyles();

  return (
    <S.WrapperList>
      <img width="140px" src={product.image} alt={product.name} />
      <h6>{children}</h6>
      R$ {product.price.toFixed(2)}
      <button
        variant="contained"
        onClick={() => dispatch(cartActions.Add(cart, product))}
      >
        Adicionar
      </button>
    </S.WrapperList>
  )
}

export default Card;
