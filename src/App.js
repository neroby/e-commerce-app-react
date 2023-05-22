import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Product from "./components/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SIGNIN" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Cart" element={<Cart />} />
          {/* <Route path="Product" element={<Product />} /> */}
        </Routes>
      </BrowserRouter>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SIGN IN" element={<Login />} />
      </Routes> */}
    </>
  );
}

export default App;
