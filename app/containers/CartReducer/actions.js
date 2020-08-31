/*
 *
 * Cart actions
 *
 */

import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from "axios";




export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART = 'GET_CART';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAIL = 'GET_CART_FAIL';

export const Actions =
    {
        type: 'GET_CART',
        payload: {
            request: AxiosRequestConfig
        }
    } | {
        type: 'GET_CART_SUCCESS',
        payload: AxiosResponse
    };

export  const addToCart= (product)=>{
  return{
      type: ADD_TO_CART,
      product 
    }
  } 

export const getCart = ()  =>{

  return{
    type: GET_CART,
    payload: {
      request:{
        method:'get',
        url:'/cart'
      },
      
    }
  }
}