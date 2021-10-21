/** Dependencies */
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

/** Pages && Components */
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/login/Login";
import Register from "./pages/Auth/register/Register";
import FoodCalendar from "./pages/Calendar/FoodCalendar";

/** Contexts */
import { useAuth, AuthContextProvider } from "./context/AuthContext/AuthContext";
import { FoodContextProvider } from "./context/FoodContext/FoodContext";

function App() {

  return (
    <AuthContextProvider>
      <FoodContextProvider>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                {/* {user ? <Home /> : 
                } */}
                <Home />
                {/* <Register /> */}
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
