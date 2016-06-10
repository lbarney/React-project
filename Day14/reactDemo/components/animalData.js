var React = require('react');



var AnimalData = React.createClass({
	render: function () {
		return (
			
		<div>
			<div>
				<h1>  Hi My name is {this.props.name} </h1>
			</div>
			<div>
				<h2>I am a {this.props.species} that lives in the {this.props.habitat} where I enjoy eating {this.props.diet}. </h2>
			</div>

		</div>


			)
	}

});

module.exports = AnimalData;