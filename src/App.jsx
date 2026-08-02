import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Heropage from "./pages/home/Heropage"
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/auth/Login"
import ProductDetails from "./pages/details/ProductDetails"

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Heropage />
      },
      {
        path:"/home",
        element: <Heropage />
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />
      }
    ]
  },
{
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  },
  
])

  return (
    <div className="bg-stone-100">
    <RouterProvider router={router} />
    </div>
  )
}

export default App
