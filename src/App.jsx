import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import PageView from "./components/PageView";
import CategoryListing from "./pages/CategoryListing";
import NotFound from "./pages/NotFound";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import CategoryDashBoard from "./pages/settings/CategoryDashBoard";
import ProductDashBoard from "./pages/settings/ProductDashBoard";
import CategoryMgmt from "./pages/settings/CategoryMgmt";
import ProductMgmt from "./pages/settings/ProductMgmt";

function App() {
  const routesArray = createBrowserRouter([
    {
      path: "/",
      element: <PageView />,
      children: [
        {
          path: "/",
          element: <CategoryListing />,
          errorElement: <NotFound />,
        },
        {
          path: "/categories",
          element: <CategoryListing />,
        },
        {
          path: "/products",
          element: <ProductListing />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/settings",
          element: <CategoryDashBoard />,
        },
        {
          path: "/settings/categories",
          element: <CategoryDashBoard />,
        },
        {
          path: "/settings/products",
          element: <ProductDashBoard />,
        },
        {
          path: "/settings/categorymgmt",
          element: <CategoryMgmt />,
        },
        {
          path: "/settings/productmgmt",
          element: <ProductMgmt />,
        },
      ],
      errorElement: <NotFound />,
    },
  ]);

  const theme = createTheme({
    palette: {
      background: {
        default: "rgba(65, 81, 97,0.30)",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <RouterProvider router={routesArray} />
      </ThemeProvider>
    </>
  );
}

export default App;
