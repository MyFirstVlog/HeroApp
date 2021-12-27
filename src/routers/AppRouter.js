import { Routes, Route, BrowserRouter} from "react-router-dom";
import React from 'react'
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>                
                <Route path="/login" element={<LoginScreen />} />

                <Route path="/*" element={
                    <PrivateRoute>
                        <DashBoardRoutes />
                    </PrivateRoute>
                }
                />
                {/* <Route path="/*" element={<DashBoardRoutes />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
