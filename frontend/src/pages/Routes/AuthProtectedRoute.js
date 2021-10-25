/** Dependencies */
import { Route, Redirect } from "react-router-dom";

/** Contexts */
import { useAuth } from '../../context/AuthContext/AuthContext'



function ProtectedRoute({ component: Component, ...rest }) {

    const { loggedIn } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => {

                if (!loggedIn) {
                    return <Component {...props} />
                }

                return <Redirect to={{ pathname: '/' }} />
            }}
        />
    )
}

export default ProtectedRoute
