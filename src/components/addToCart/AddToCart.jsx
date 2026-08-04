import { useContext } from "react";
import Button from "../ui/Button";
import {
  AuthContextWrapper,
  ProductsContextWrapper,
} from "../../context/AuthContext";
import { toast } from "sonner";

export default function AddToCart({ item }) {
  const { keepInCart } = useContext(ProductsContextWrapper);
  const { isAuthenticated } = useContext(AuthContextWrapper);

  const handleClick = () => {
    if (!isAuthenticated) {
      toast.error("Please login fisrt");
      return;
    }
    keepInCart(item);
  };

  return (
    <Button
      varient="primary"
      disabled={isAuthenticated}
      type="button"
      children="Add to Cart"
      onClick={handleClick}
    />
  );
}
