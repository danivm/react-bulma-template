import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Navbar} from './components/navbar/index'
import {Footer} from './components/footer/index'
import {Home} from './pages/home/index'
import {Sample} from './pages/sample/index'
import './index.scss'

ReactDOM.render(
  <Router>
    <>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/sample/" component={Sample} />
      <Footer />
    </>
  </Router>,
  document.getElementById('root')
)
