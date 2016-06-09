var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container jumbotron">
					<h2 className="theTitle">Hello from Lauren's awesome page!</h2>
					<p> This is some nonsense text This is some nonsense text This is some nonsense text</p>
					
					
					<Link to='home'>
						<button className="btn btn-success">Home</button>
					</Link>
					<Link to='about'>
						<button className="btn btn-success">About</button>
					</Link>
					<Link to="animals">
						<button className="btn btn-success">Animals</button>
					</Link>	
					{this.props.children}
				</div>	
			</div>
			)
	}
});

module.exports = Main;