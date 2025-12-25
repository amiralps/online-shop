import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import ProductsDetail from "./pages/ProductsDetail";
import LayOutWithHF from "./layout/LayOutWithHF";
import NotFound from "./pages/NotFound";
import ShoppingCart from "./pages/ShoppingCart";
import Login from "./pages/Login";

function App() {
  /* Detect touch/mouse
    try {
      document.createEvent("TouchEvent");
      console.log("yes")
    } catch(e) {
      console.log("no")
    } */
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayOutWithHF>
                <Home />
              </LayOutWithHF>
            }
          />
          <Route
            path="/products"
            element={
              <LayOutWithHF>
                <Products />
              </LayOutWithHF>
            }
          />
          <Route
            path="/shopping-cart"
            element={
              <LayOutWithHF>
                <ShoppingCart />
              </LayOutWithHF>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
