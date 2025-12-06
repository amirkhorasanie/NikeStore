import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/page";
import ShoppingCart from "./pages/ShoppingCart/page";
import Register from "./pages/Register/page";
import RootLayout from "./Components/layout/RootLayout";
import ProductDetalis from "./pages/ProductDetalis/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products/:productId",
        element: <ProductDetalis />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]
  },
]);

export default router;