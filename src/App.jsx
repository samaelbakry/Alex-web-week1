import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Heropage from "./pages/home/Heropage";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/Login";
import ProductDetails from "./pages/details/ProductDetails";
import Categories from "./pages/categories/Categories";
import CategoriesDetails from "./pages/details/CategoriesDetails";
import ProtectedMainRoutes from "./components/ProtectedRoutes/ProtectedMainRoutes";
import ProtectedAuthRoutes from "./components/ProtectedRoutes/ProtectedAuthRoutes";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedMainRoutes>
          <MainLayout />
        </ProtectedMainRoutes>
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
