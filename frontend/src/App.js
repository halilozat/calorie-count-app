import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



function App() {
  const { user } = useContext(AuthContext)

  return (
    <div >
      <Router>
        <Switch>
          <Route path="/" exact >
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">
            {user
              ? <Redirect to="/" />
              : <Login />
            }
          </Route>
          <Route path="/register">
            {user
              ? <Redirect to="/" />
              : <Register />
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
