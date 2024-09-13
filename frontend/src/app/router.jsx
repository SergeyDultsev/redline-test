import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import HomePage from '@/pages/HomePage';
import AuthPage from '@/pages/AuthPage';

const AppRoutes = () => {
    const token = Cookies.get('token');

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={token ? <HomePage /> : <Navigate to="/login" />}
                />
                <Route
                    path="/login"
                    element={!token ? <AuthPage /> : <Navigate to="/" />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;