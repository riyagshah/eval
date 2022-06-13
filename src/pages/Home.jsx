import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedsAPI } from "../store/product/product.actions";

import axios from 'axios'
import Products from "../components/Products/Products";
const Home = () => {


  return (
    <div>
      <h1>Home</h1>
      <br />
     <Products/>
    </div>
  );
};

export default Home;
