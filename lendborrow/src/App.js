import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login'
import SignUp from './components/signup'
import Dashboard from './components/dashboard'

function App() {
  const [css, setCss] = useState(false);
  const getData = (val) => {
    setCss(val);
  }
  return (
    <Router>
      <div className="App">
        {!css && < nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Lend & Borrow
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>}

        <div className='outer'>
          <div className={css ? "dashboard" : "inner"}>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path='/dashboard' element={<Dashboard getData={getData} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router >
  )
}

export default App