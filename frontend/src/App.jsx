import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GetinTouch from "./pages/GetinTouch";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import FAQs from "./pages/FAQs";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import ReadBlogs from "./pages/ReadBlogs";
import HamburgerMenu from "./components/HamburgerMenu";
import About from "./pages/About";
import Footer from "./components/Footer";
function App() {
  const [isMenuOpen,setMenuOpen] = useState(false);
  const [isAuth,setisAuth] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className='w-full h-full bg-black'>
         
        {/* Navbar and other sections */}
        <Navbar toggleMenu={toggleMenu}/>
        {isMenuOpen && <HamburgerMenu closeMenu={toggleMenu} />}
        <Routes>
          {/* Home Route */}
          <Route path="/"element={<Home/>}/>
          {/* Get in Touch Route */}
          <Route path="/get-in-touch" element={<GetinTouch />} />
          <Route path="/events" element={<Events/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/FAQ" element={<FAQs/>}/>
          <Route path="/AboutUs" element={<About/>}/>
        </Routes>
     
    </div>
  )
}

export default App
