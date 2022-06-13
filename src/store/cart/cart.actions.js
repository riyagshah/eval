
import axios from "axios";
import { GET_CART_ITEMS_ERROR, GET_CART_ITEMS_LOADING, GET_CART_ITEMS_SUCCESS, REMOVE_CART_ITEMS_ERROR, REMOVE_CART_ITEMS_LOADING, REMOVE_CART_ITEMS_SUCCESS } from "./cart.types";

const fetchBlogPostRequest=(payload)=>{
  return{
      type:GET_CART_ITEMS_LOADING,
      payload
  }
}

const fetchBlogPostSuccess=(payload)=>{
  return{
      type:GET_CART_ITEMS_SUCCESS,
      payload
  }
}
const fetchBlogPostFailure=(payload)=>{
  return{
      type:GET_CART_ITEMS_ERROR,
      payload
  }
}

const fetchBPost=(payload)=>(dispatch)=>{
  dispatch(fetchBlogPostRequest());
  axios.get(" http://localhost:8080/cartItems")
  .then(r=>dispatch(fetchBlogPostSuccess(r.data))
  )
 
  .catch(e=>dispatch(fetchBlogPostFailure(e.data)))


}


const removeBlogPostRequest=(payload)=>{
  return{
      type:REMOVE_CART_ITEMS_LOADING,
      payload
  }
}

const removeBlogPostSuccess=(payload)=>{
  return{
      type:REMOVE_CART_ITEMS_SUCCESS,
      payload
  }
}
const removeBlogPostFailure=(payload)=>{
  return{
      type:REMOVE_CART_ITEMS_ERROR,
      payload
  }
}

const deletePost=(payload)=>(dispatch)=>{
dispatch(removeBlogPostRequest())
  axios.delete(" http://localhost:8080/${payload.id",payload)
  .then(r=>dispatch(removeBlogPostSuccess(r.data))
  )
 
  .catch(e=>dispatch(removeBlogPostFailure(e.data)))


}
export {fetchBPost,deletePost}