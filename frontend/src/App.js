/** Dependencies */
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

/** Pages && Components */
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import FoodCalendar from "./pages/calendar/FoodCalendar";

/** Contexts */
import { useAuth, AuthContextProvider } from "./context/authContext/AuthContext";
import { FoodContextProvider } from "./context/foodContext/FoodContext";

function App() {
  // const { user } = useAuth();

  return (
    <AuthContextProvider>
      <FoodContextProvider>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                {/* {user ? <Home /> : 
                } */}
                <Register />
              </Route>

              <Route path="/login">
                {/* {user ? <Redirect to="/" /> : 
                } */}
                <Login />
              </Route>

              <Route path="/register">
                {/* {user ? <Redirect to="/" /> : 
                } */}
                <Register />
              </Route>

              <Route path="/foodCalendar" component={FoodCalendar} />
            </Switch>
          </Router>
        </div>
      </FoodContextProvider>
    </AuthContextProvider>
  );
}

export default App;
