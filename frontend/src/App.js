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
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import FoodCalendar from "./components/FoodCalendar";

/** Contexts */
import {
  AuthContext,
  AuthContextProvider,
} from "./context/authContext/AuthContext";
import { FoodContextProvider } from "./context/foodContext/FoodContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <FoodContextProvider>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                {user ? <Home /> : <Register />}
              </Route>

              <Route path="/login">
                {user ? <Redirect to="/" /> : <Login />}
              </Route>

              <Route path="/register">
                {user ? <Redirect to="/" /> : <Register />}
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
