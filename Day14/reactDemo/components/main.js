
var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container jumbotron back">
				<div id="box"></div>
				 <h1 className="theTitle">Hello from Lance's awesome page!</h1>
					 <p></p>
					
					<Link to='/'>
						<button className="btn btn-success">Home</button>
					</Link>
					<Link to='/about'>
						<button className="btn btn-success">About</button>
					</Link>
					<Link to="/animals">
						<button className="btn btn-success">See the Animals</button>
					</Link>	
					{this.props.children}
				</div>	
			</div>
			)
	}
});

module.exports = Main;