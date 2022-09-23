import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from '../components/Home.js';
import SearchPage from '../components/SearchPage';



const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="search" element={<SearchPage/>} />
    </Routes>
    
   
  </BrowserRouter>
  );
}

export default AppRouter