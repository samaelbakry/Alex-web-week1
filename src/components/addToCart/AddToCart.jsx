import { useContext} from 'react'
import Button from '../ui/Button'
import { ProductsContextWrapper } from '../../context/AuthContext'

export default function AddToCart({item}) {
    const { keepInCart } = useContext(ProductsContextWrapper)
    
  return (
     <Button btnType={"button"} btnText={"Add To Cart"} btnStyle={"addToCart"} fn={()=>keepInCart(item)} />
  )
}
