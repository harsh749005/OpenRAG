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
          <Route path="/OpenRAG"element={<Home/>}/>
          {/* Get in Touch Route */}
          <Route path="/OpenRAG/get-in-touch" element={<GetinTouch />} />
          <Route path="/OpenRAG/events" element={<Events/>}/>
          <Route path="/OpenRAG/blogs" element={<Blogs/>}/>
          <Route path="/OpenRAG/products" element={<Products/>}/>
          <Route path="/OpenRAG/FAQ" element={<FAQs/>}/>
          <Route path="/OpenRAG/readblogs" element={<ReadBlogs/>}/>
          <Route path="/OpenRAG/AboutUs" element={<About/>}/>
        </Routes>
     
    </div>
  )
}

export default App
