import "./App.css";
import Home from "./Home.jsx";
import signUp from "./components/signUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signUp" component={signUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
