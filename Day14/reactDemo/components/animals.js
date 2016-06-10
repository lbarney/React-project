//Animals
//  AnimalData
//	AnimalPostData
//		AnimalPostForm


var React = require('react');
var AnimalData = require('./animalData.js');

var AnimalPostData = require('./animalPostData.js');


var Animals = React.createClass({
	getInitialState: function(){ 
		return {
			animals : []
		}

	},

	getAllAnimalsFromServer: function(){
		var self = this;

		$.ajax({
			method: 'GET',
			url: '/animals'
		}).then(function(data){
			console.log(data);
			self.setState({animals: data})
		})

	},
	componentDidMount: function(){
		this.getAllAnimalsFromServer();
	},



	render: function() {

		var things = this.state.animals.map(function(item){ 
			return <AnimalData
						 name = {item.name} 
						 species = {item.species}
						  habitat	= {item.habitat}
						   diet = {item.diet}
						    key = {item._id}
						    /> 
		});

		return(
			<div>
				
								{ things }

							<AnimalPostData getAllAnimalsFromServer={this.getAllAnimalsFromServer} />
				
			</div>
		)
		
	}
});

module.exports = Animals;
