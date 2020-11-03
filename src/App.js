import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';



function App() {
   
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
             <Home></Home>
          </Route>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/post/:postId">
             <PostDetail></PostDetail>
          </Route>
          <Route path="*">
             <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
       
      
    </div>
  );
}

export default App;
