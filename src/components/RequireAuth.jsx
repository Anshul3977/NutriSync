import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
    const { user } = useContext(AuthContext);

    if (!user) {
        // If the user is not logged in, redirect them to the login page
        return <Navigate to="/login" replace />;
    }

    // If the user is logged in, render the children components
    return children;
}

export default RequireAuth;
