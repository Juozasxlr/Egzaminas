import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Create from "./components/Create";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import Edit from "./components/Edit";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/create"><Create /></Route>
          <Route exact path="/knygos/:id"><BookDetails /></Route>
          <Route exact path="/knygos/edit/:id"><Edit /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
