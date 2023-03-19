import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router'
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Routes() {

    return (
        <RouterRoutes>
            <Route path={'/'} element={<SignIn/>}/>
            <Route path={'/forgot-password'} element={<ForgotPassword/>}/>
            <Route path={'/signup'} element={<SignUp/>}/>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
        </RouterRoutes>
    )

}