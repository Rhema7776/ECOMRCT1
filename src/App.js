import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path = '/products' element={<Products/>}/>
      <Route path = '/products/:id'  element={<Product/>}/>
      <Route path = '/cart' element={<Cart/>}/>
      </Routes>
      
    </>
  );
}

export default App;
