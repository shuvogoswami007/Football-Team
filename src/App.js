import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from "./Component/Details/Details";
import NoMatch from "./Component/NoMatch/NoMatch";

function App() {
  return (
    <div className="App">
       <Header></Header>
       
      <Router>
        <Switch>
          <Route path="/team/:id">
            <Details></Details>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="*">
            <NoMatch></NoMatch>
            
          </Route>
         
        </Switch>
      </Router>
     
      
    </div>
  );
}

export default App;



