import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Signup from './pages/signup-page'
import Signin from './pages/login-page'
import Home from './pages/home-page'
import Post from './pages/post-page'

function App() {
  return (
   <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
