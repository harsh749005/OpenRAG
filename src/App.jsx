import { useState,useRef } from 'react'
import React from 'react';
import Blogs from './pages/Blogs';

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className='w-full h-full bg-black'>
    <Blogs/>
      
    </div>
  )
}

export default App
