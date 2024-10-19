// eslint-disable-next-line no-unused-vars
import React  from 'react';

import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import { useState } from 'react';

const App = () => {
  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='App'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />     </Routes>

    </div>
    <Footer /></>
  )
}

export default App