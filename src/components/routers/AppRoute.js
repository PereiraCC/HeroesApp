import React from 'react';
import { Routes, Route, BrowserRouter  } from "react-router-dom";

import { LoginScreen } from '../login/LoginScreen';

import { DashboardRoutes } from './DashboardRoutes';

export const AppRoute = () => {
    return (
        <BrowserRouter >
            
            <Routes>
        
                <Route path="/login"  element={<LoginScreen />} />

                <Route path="/*" element={<DashboardRoutes />} />

            </Routes>
        </BrowserRouter >
    )
}