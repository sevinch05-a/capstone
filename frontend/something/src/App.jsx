import { useEffect, useState } from 'react';


import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/ShopPage/Shop';
import Product from './pages/ProductPage/Product';
import Cart from './pages/CartPage/Cart';
import LoginSignup from './pages/LoginPage/LoginSignup';
import Admin from './pages/AdminPage/Admin';
import ShopCategory from './pages/ShopCategoryPage/ShopCategory';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/costumes' element={<ShopCategory category="costumes"/>}/>
        <Route path='/accessories' element={<ShopCategory category="accessories"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
       
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}















// function App() {
//   const [product, setProduct] = useState([]);

//   const fetchProducts = async () => {
//     const response = await axios.get("http://localhost:4000/api/products")
//     const info = await response.data
//    await setProduct(info.products)
//    console.log("Product Fetched from DB")
//    console.log("State Available: PRODUCTS[{}]")
//   };

  

//   useEffect(()=>{
//     fetchProducts();
//   },[])
//   return (
//     <>
//     {product ? (
//       <Index info={product}/>
//     ): <p>No Products Available</p>}
//     </>
//   );
// }

export default App;
