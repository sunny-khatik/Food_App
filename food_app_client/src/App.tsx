import React from 'react';
import './App.css';
import Auth from "./auth/auth"
import {Switch , Route} from "react-router-dom"
import Homepage from "./Components/Homepage/Homepage"
function App() {
  return (
    <div className="App">
 
      <Switch>
          <Route path="/" exact component={Auth}/>
          <Route path="/homepage" exact component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
