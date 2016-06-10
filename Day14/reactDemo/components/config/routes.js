var React = require('react');
var	ReactDOM = require('react-dom');
var ReactRouter = require('react-router');  //To Use the import comment out the next five lines
var Route = ReactRouter.Route;				//
var Router = ReactRouter.Router;			//
var IndexRoute = ReactRouter.IndexRoute;	//
var hashHistory = ReactRouter.hashHistory;	//

// import {Router, Route, hashHistory, IndexRoute} from 'react-router'



var Main = require('./../main'); 
var About = require('./../about');
var Home = require('./../home');
var Animals = require('./../animals');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}/>
			<Route path = '/animals' component = {Animals}/>
			<Route path = '/about' component = {About}/>
		</Route>
	</Router>
	,
	 document.getElementById('app')
	 );