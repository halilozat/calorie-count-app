/** Dependencies */
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
import UserMacros from './components/UserMacros/UserMacros'

/** Routes */
import ProtectedRoute from "./pages/Routes/ProtectedRoute";
import AuthProtectedRoute from "./pages/Routes/AuthProtectedRoute";

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
                <Home />
              </Route>

              <AuthProtectedRoute path="/login" component={Login} />
              <AuthProtectedRoute path="/register" component={Register} />

              <ProtectedRoute path="/foodCalendar" component={FoodCalendar} />
              <ProtectedRoute path="/myMacros" component={UserMacros} />

            </Switch>
          </Router>
        </div>
      </FoodContextProvider>
    </AuthContextProvider>
  );
}

export default App;
