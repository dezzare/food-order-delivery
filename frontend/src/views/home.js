import React from "react";
import { useSelector } from "react-redux"
import Item from "../components/item"
import Card from "../components/card"
import * as S from "./style"

const HomePage = () => {
  const products = useSelector(state => state.products)
  // const classes = useStyles();

  const categorys = products.map(
    category => {
      const container = {};
      container['id'] = category.id_categorys;
      container['name'] = category.name_categorys;
      return container;
    }
  )

  const category = categorys.map(JSON.stringify)
    .filter(function(item, index, arr) {
      return arr.indexOf(item, index + 1) === -1;
    })
    .map(JSON.parse)

  const arrayCategory = categorys.map(category => category.name)
  let count = {};

  for (let i = 0; i < arrayCategory.length; i++) {
    {
      let key = arrayCategory[i];
      count[key] = (count[key] ? count[key] + 1 : 1)
    }
  }

  return (
    <>
      <h5>   Categorias </h5>
      <S.WrapperList>
        {category.map(
          category => {
            return (
              <Item
                key={category.id}
                name={category.name}
                details={count[category.name]}
              />
            )
          }
        )}
      </S.WrapperList>
      <S.WrapperList>
        {products.map(item => {
          return (
            <Card
              key={item.id_product}
              product={item}
            >
              {item.name_product}
            </Card>
          )
        })}
      </S.WrapperList>
    </>
  )
}

export default HomePage;
