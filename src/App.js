import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/actions/productAction"
import Products from "./components/Products";
function App() {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchData();

  }, [])

  const fetchData = async () => {
    let response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12');
    let data = await response.json();
    // data.map(val => dispatch(add({
    //   id: val.id,
    //   title: val.title,
    //   img: val.images[0]
    // })))
    dispatch(add(data))
  }

  console.log(products)
  return (
    <>
      <div className="container">
        <div className="row">
          {
            products.map(product => {
              return <Products key={product.id} product={product} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
