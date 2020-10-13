import React from 'react';
import Coding from './components/coding';
import Header from './components/appheader';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
            <Route exact path="/">
                <Coding/>
            </Route>
      </Switch>
      </Router>    
    </div>
  );
}

export default App;
