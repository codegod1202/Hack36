import "./App.css";
import Home from "./Home.jsx";
import signUp from "./components/signUp";
import login from "./components/login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signUp" component={signUp} />
          <Route path="/login" component={login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
