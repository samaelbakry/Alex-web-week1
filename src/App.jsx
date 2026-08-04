import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedAuthRoutes from "./components/ProtectedRoutes/ProtectedAuthRoutes";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/auth/Login";
import Cart from "./pages/cart/Cart";
import Categories from "./pages/categories/Categories";
import CategoriesDetails from "./pages/details/CategoriesDetails";
import ProductDetails from "./pages/details/ProductDetails";
import Heropage from "./pages/home/Heropage";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <MainLayout />
      ),
      children: [
        {
          index: true,
          element: <Heropage />,
        },
        {
          path: "/home",
          element: <Heropage />,
        },
        {
          path:"/cart",
          element: <Cart/>
        },
        {
          path:"/wishList",
          element: <Wishlist/>
        },
        {
          path: "/productDetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/categories/:slug",
          element: <CategoriesDetails />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <ProtectedAuthRoutes>
          <AuthLayout />
        </ProtectedAuthRoutes>
      ),
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <div className="bg-stone-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
