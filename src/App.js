import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import {
  AllProducts,
  CartPage,
  HomePage,
  SingleProduct
} from './pages'
import {
  Navbar,
  Footer
} from './component'


function App() {


  return <HashRouter>
    <Navbar />
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/allproducts' element={<AllProducts />} />
      <Route path='/singleProduct/:id' element={<SingleProduct />} />
      <Route path='/cart' element={<CartPage />} />
    </Routes>
    <Footer />
  </HashRouter>

}

export default App;
