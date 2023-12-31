import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    return (
        props.loggedIn ? props.children : <Navigate to="/sigin" replace />
    )
}

export default ProtectedRoute;
