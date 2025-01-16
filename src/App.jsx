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
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className='w-full h-full bg-black'>
         
        {/* Navbar and other sections */}
        <Navbar />
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
        </Routes>
      
    </div>
  )
}

export default App
