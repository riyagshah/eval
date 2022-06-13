
import Product from "../Products/Product/Product"


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getFeedsAPI } from "../store/product/product.actions";

const Products = () => {


 const  { data,loading,error } = useSelector((state) => state.product);

  // localStorage, check if data
  // useEffect(() => {
  //   if (data.length === 0) {
  //     dispatch(getFeedsAPI());
  //     dispatch(fetchBPost())
  //     .then(res=>{
  //       setcount(res.data.length)
  //     })
  //   }

  // }, [dispatch]);
  return <div>
     {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {!loading &&
        data.map((product) => (
          <Product key={product.id} data={product}/>
        ))}
  </div>;
};

export default Products;
