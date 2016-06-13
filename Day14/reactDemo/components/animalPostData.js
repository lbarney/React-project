
//Animals
//  AnimalData
//	AnimalPostData
//		AnimalPostForm




var React = require('react');
var AnimalPostForm = require('./animalPostForm.js');

var AnimalPostData = React.createClass({
	getInitalState: function(){
		return {
			name: null,
			species: null,
			habitat: null,
			diet: null
		}
	},

	handleNameChange: function(event){
		this.setState({name: event.target.value})
	},

	handleSpeciesChange: function(event){
		this.setState({species: event.target.value})
	},

	handleHabitatChange: function(event){
		this.setState({habitat: event.target.value})
	},

	handleDietChange: function(event){
		this.setState({diet: event.target.value})
	},

	handleAnimalSubmit: function(event){
		event.preventDefault();
		var animal = {};
		animal.name = this.state.name;
		animal.species = this.state.species;
		animal.habitat = this.state.habitat;
		animal.diet = this.state.diet;

		this.handleNewAnimalPost(animal);
		this.setState({name: '', species: '',habitat: '',diet: ''});

	},

	handleNewAnimalPost: function(animal){
		$.ajax({
			url: '/animals',
			method: 'POST',
			dataType: 'json',
			data: animal,
			success: function(data){
				this.props.toggleActiveComponent('allAnimals');
				
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/animals', status, err.toString())
			}.bind(this)
		})
	},



	render: function(){
		return (
			<div>
				<h1> animalPostData </h1>
				<AnimalPostForm handleAnimalSubmit = {this.handleAnimalSubmit}
								handleNameChange = {this.handleNameChange}
								handleSpeciesChange = {this.handleSpeciesChange}
								handleHabitatChange = {this.handleHabitatChange}
								handleDietChange = {this.handleDietChange}
				/>
			</div>
			)
	}
});
module.exports = AnimalPostData;