import React, { Component } from 'react'
import Navbar from './view/Navbar'
import './App.css'
import Users from './users/Users'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar title="GitHub Finder" icon="fab fa-github" />
				<Users />
			</div>
		)
	}
}

export default App
