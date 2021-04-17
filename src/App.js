import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchPage from "./pages/search/SearchPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
