import { useContext } from "react";
import Button from "../ui/Button";
import {
  AuthContextWrapper,
  ProductsContextWrapper,
} from "../../context/AuthContext";
import { toast } from "sonner";

export default function AddToWishlist({ item }) {
  const { keepInWishlist } = useContext(ProductsContextWrapper);
  const { isAuthenticated } = useContext(AuthContextWrapper);

  const handleClick = () => {
    if (!isAuthenticated) {
      toast.error("Please login fisrt");
      return;
    }
    keepInWishlist(item);
  };
  return (
    <Button
      children="Add to wishlist"
      type="button"
      varient="success"
      onClick={handleClick}
    />
  );
}
