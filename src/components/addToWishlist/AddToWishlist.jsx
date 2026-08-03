import { useContext } from "react";
import Button from "../ui/Button";
import { ProductsContextWrapper } from "../../context/AuthContext";

export default function AddToWishlist({item}) {
  const { keepInWishlist } = useContext(ProductsContextWrapper)
  return (
     <Button btnType={"button"} btnText={"Add To Wishlist"} btnStyle={"addToWishlist"} fn={()=>keepInWishlist(item)}/>
  )
}
