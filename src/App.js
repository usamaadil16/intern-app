import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router , Route, Switch } from "react-router-dom"
import Create from "./Create";
function App() {
  const title = "Welcome to my new blog";
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;


//make sure to use the following command in another terminal to get data from the database:
// npx json-server --watch data/db.json --port 8000