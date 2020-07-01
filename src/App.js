import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './components/Menu';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import SettingColor from './pages/SettingColor';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />

        <div className="container pt-3">
          <Switch>
            <Route path="/settingColor">
              <SettingColor />
            </Route>
            <Route path="/toDoList">
              <ToDoList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
    
  );
}

export default App;
