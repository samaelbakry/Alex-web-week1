import { useEffect, useState } from "react";
import {  ProductsContextWrapper } from "./AuthContext";
import CryptoJS from "crypto-js";
import { toast } from "sonner";


export default function ProductsProvider({ children }) {
  const [cart, setCart] = useState(()=>{
    const savedItem = localStorage.getItem("cart")
    return savedItem ? JSON.parse(savedItem) : []
  });

  const [wishlist , setWishlist] = useState(()=>{
    const savedItem = localStorage.getItem("wishlist")
    return savedItem ? JSON.parse(savedItem) : []
  })


  function keepInCart(item){
    const {id, price , title , rating , thumbnail } = item

    const totalPrice = cart.reduce((acc , item) => acc + item.price ,0)
    const encryptedId = CryptoJS.AES.encrypt(
       id.toString(),
        "secret_key",
    ).toString()

    setCart((prev)=>[...prev , {encryptedId , price, id, title , rating , thumbnail , totalPrice}])
    toast.success("Product added to your cart successfully!")
  }

  function keepInWishlist(item){
    const {id, price , title , rating , thumbnail } = item

    const encryptedId = CryptoJS.AES.encrypt(
        id.toString(),
        "secret_key",
    ).toString()

    setWishlist((prev)=>[...prev , { encryptedId , id , price , title , rating , thumbnail}])
    toast.success("Product added to your cart successfully!")
  }

function declutter(type) {
  if (type === "cart") {
    setCart([]);
    localStorage.removeItem("cart");
  } else if (type === "wishlist") {
    setWishlist([]);
    localStorage.removeItem("wishlist");
  }
} 

  useEffect(() => {
   localStorage.setItem("cart" , JSON.stringify(cart))
   localStorage.setItem("wishlist" , JSON.stringify(wishlist))
  }, [cart , wishlist])
  

  return (
    <ProductsContextWrapper.Provider
      value={{cart , wishlist , keepInCart , keepInWishlist , declutter }}
    >
      {children}
    </ProductsContextWrapper.Provider>
  );
}
