import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import ProductsDetail from "./pages/ProductsDetail";
import LayOutWithHF from "./layout/LayOutWithHF";
import LayOutWithoutHF from "./layout/LayOutWithoutHF";
import NotFound from "./pages/NotFound";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayOutWithHF />}>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="shopping-cart" element={<ShoppingCart />} />
          </Route>
          <Route element={<LayOutWithoutHF />}>
            <Route path="products/:id" element={<ProductsDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
