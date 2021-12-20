import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth(); // context api

    // loading spinner
    if (isLoading) {
        return <div className="text-center my-5">
            <Spinner animation="border" variant="info" />
        </div>
    }
    // private route function
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signIn",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;