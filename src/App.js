import  Navbar from "./Component/1-Navarbar/navbar.jsx";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Products from "./Component/2-Products/products.jsx";
import Cart from "./Component/3-Cart/cart.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
