import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext =createContext(null);

const StoreContextProvider=(props)=>{

    const [cartItem,setcartItem]=useState({});

    const addTocart=(itemId)=>{
        if(!cartItem[itemId]){
            setcartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart=(itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{

        console.log(cartItem);
    },[cartItem])




    
    const contextValue={
        food_list,
        cartItem,
        setcartItem,
        addTocart,
        removeFromCart

    }
   
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;