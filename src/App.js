import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FrontEnd from './FrontEnd';
import UserEnd from './UserEnd';
import history from './redux/history'
function App() {
  return (
    <div className={"App"} >
      <Router history={history}>
        <Switch>
          <Route path="/dashboard">
            <UserEnd />
          </Route>
          <Route path="/">
            <FrontEnd />
          </Route>


        </Switch>
      </Router>
    </div>
  )
}

export default App;
