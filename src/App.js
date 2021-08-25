import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Branch from './Branch';
import Admin from './Admin';
import Welcome from './Welcome';
import Navbar from './Navbar';
const App = () => {
  return(
    <div className="app">
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Welcome}/> 
        <Route path="/client" component={Home}/>
        <Route path="/branch" component={Branch}/>
        <Route path="/admin" component={Admin}/>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
