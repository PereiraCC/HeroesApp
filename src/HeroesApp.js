import { useReducer } from 'react';

import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';

import { AppRoute } from './components/routers/AppRoute';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}
export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRoute />
        </AuthContext.Provider>
    )
}
