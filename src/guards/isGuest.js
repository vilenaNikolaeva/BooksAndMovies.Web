import { Navigate } from 'react-router';
import { useUser } from './../context/UserCtx';

const isGuest = (WrappedComponent) => {
    const ComponentWrapper = (props) => {
        const { currentUser}= useUser();

        if (currentUser != null) {
            return <Navigate to="/" />;
        }

        return <WrappedComponent {...props} />;
    };

    return ComponentWrapper;
};

export default isGuest;
