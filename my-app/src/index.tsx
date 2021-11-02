import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import {App} from './App'
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/:id?">
        <App />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
