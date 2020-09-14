import cart1 from 'images/cart/img1.jpg'
import { ADD_TO_CART, GET_CART_SUCCESS, GET_CART_FAIL, Actions } from './actions.js'


export const initialState = {
    items: [
        {_id:1,name:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:cart1},
        {_id:2,name:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: cart1},
        {_id:3,name:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: cart1},
        {_id:4,name:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:cart1},
        {_id:5,name:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: cart1},
        {_id:6,name:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: cart1}
    ],
    addedItems:[],
    cartProducts:[],
    total: 0

}
const cartReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_CART_SUCCESS:
            console.log("----------------- PASO SI    -  " + action.type);
            return {
                ...state,
                cartProducts: action.payload.data
            };
        case GET_CART_FAIL:
            console.log("----------------- FAILLL   -  " + action.type);
            let error = action.error;
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
             
                if(error.response.data.error =="User cart not found" || error.response.data.error =="Nothing added to the cart"){
                    
                }else{
                    if(localStorage.getItem('type')=='Buyer'){
                        localStorage.setItem('token',null);
                    }
                }
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              };
            
            return state;
            
            default: return state;
    }

        //INSIDE HOME COMPONENT
   /* if(action.type === ADD_TO_CART){
        let addedItem = action.product
        //check if the action id exists in the addedItems
        let existed_item = state.items.find(item=> action.product._id === item._id)
        if(existed_item)
        {
            return state
        }
        else{
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                items: [...state.items, addedItem],
                total : newTotal
            }
            
        }
    }
    else{
        if(action.type === GET_CART_SUCCESS){
            console.log("-------------------------------");
            console.log({
                ...state,
                cartProducts: action.payload.data
            });
            console.log("-------------------------------");
            return{
                ...state,
                cartProducts: action.payload.data
            }
        }
        console.log(action.type);
 
        let payload = action.payload;
        if(action.payload){
            payload = action.payload.request;
        }
        return{
            ...state
        }
    }*/
        
      

}
export default cartReducer;