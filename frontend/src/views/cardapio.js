import { useState, useEffect } from 'react';
import axios from "axios";
import * as S from './style'

const Cardapio = () => {

  const [products, setProducts] = useState([]);
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const client = axios.create({
    baseURL: "http://localhost:5000"
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await client.get('/products')
        setProducts(response.data);
        // setDescription(response.description);
        // setPrice(response.price);
      } catch (err) {
        console.error(err)
      }
    };
    fetchProducts();
  }, []);


  return (
    <>
      {
        products.map((content) => {
          return (
            <>
              <S.WrapperList>
                <div>
                  <p></p>
                  <h6>{content.name}</h6>
                  <p>Descrição: {content.details}</p>
                  <p>Preço: {content.price}</p>
                </div>
              </S.WrapperList>
            </>
          )
        })
      }
    </>
  )
}
export default Cardapio;
