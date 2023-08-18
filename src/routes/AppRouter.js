import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import InitPage from '../components/Login/InitPage';
import LoginPage from '../components/Login/LoginPage';

const AppRouter = () => {
    return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitPage/>} />
        {/* <Route path='/login' element={<LoginPage/>} /> */}
        <Route path='/*' element={<Navigate to='/' />} />  
      </Routes>
     </BrowserRouter>
    )
}

export default AppRouter