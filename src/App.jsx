import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import ProductsDetail from "./pages/ProductsDetail";
import LayOutWithNavbar from "./layout/LayOutWithNavbar";
import LayOutWithoutNavbar from "./layout/LayOutWithoutNavbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayOutWithNavbar />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route element={<LayOutWithoutNavbar />}>
            <Route path="products/:id" element={<ProductsDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
