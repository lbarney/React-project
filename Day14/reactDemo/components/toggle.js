var React = require('react');

var Toggle = React.createClass({
	render: function(){

		return(
			<div>
			
				<button className= 'btn btn-warning'onClick ={this.props.toggleActiveComponent.bind(null,'allAnimals')} > All Animals </button>
				<button className= 'btn btn-warning'onClick ={this.props.toggleActiveComponent.bind(null,'postAnimalForm')}>Post Animals</button>
			</div>
			)
	}
});
module.exports = Toggle;