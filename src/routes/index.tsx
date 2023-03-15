import { Routes as RouterRoutes, Route } from 'react-router'
import Dashboard from './Dashboard';
import SignInSide from './SignInSide';

export default function Routes() {

    return (
        <RouterRoutes>
            <Route path={'/'} element={<SignInSide/>}/>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
        </RouterRoutes>
    )

}