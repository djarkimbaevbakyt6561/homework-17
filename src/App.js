import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MyOrders from "./components/my-order/MyOrders";
import Header from "./components/header/Header";
import MyCart from "./components/my-cart/MyCart";
import Products from "./components/products/Products";
import ProductDetail from "./components/products/ProductDetail";
function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/homework-17/" element={<div style={{ background: "white", height: "89.7vh", width: "100%" }}></div>} />
        <Route path="/homework-17/products" element={<Products />}></Route>
        <Route path="/homework-17/products/:productId/details" element={<ProductDetail />} />
        <Route path="/homework-17/myCart" element={<MyCart />}></Route>
        <Route path="/homework-17/myOrders" element={<MyOrders />}></Route>
        <Route path="*" element={<div style={{marginTop: "40px", fontSize:"30px"}}>Not Found This Path!</div>} />
      </Routes>
    </div>
  );
}

export default App;