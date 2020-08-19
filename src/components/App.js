import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Linklist from './Linklist'
import Createlink from './Createlink'
import Login from './Login'
import Search from './Search'
import '../styles/App.css'

function App() {
  return <div className="center w85">
	<Header/>
	<div className="ph3 pv1 background-grey">
		<Switch>
			<Route exact path="/" component={Linklist} />
			<Route exact path="/create" component={Createlink} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/search" component={Search} />
		</Switch>
	</div>
	</div>
}

export default App
