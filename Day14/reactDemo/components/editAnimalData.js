//Animalapp
	//AllAnimalsData
		//AllAnimals
			//AnimalCard
	//Toggle
	//AnimalPostData
		//AnimalPostForm
	//EditAnimalData
		//EditAnimalForm

var React = require('react');
var EditAnimalForm = require('./editAnimalForm.js')

var EditAnimalData = React.createClass({
		getInitialState: function(){
		return {
			name: null,
			species: null, 
			habitat: null,
			diet: null
		}
	},
	loadOneAnimalFromServer: function(){
		var self = this;
		$.ajax({
			url: '/animals/' + self.props.id,
			method: 'GET'
		}).done(function(data){
			self.setState({
				name: data.name,
				species: data.species,
				habitat: data.habitat,
				diet: data.diet
			})
		})
	},
	updateAnimal: function(animal){
		$.ajax({
			url: '/animals/' + this.props.id,
			method: 'PUT',
			dataType: 'json',
			data: animal,
			success: function(data){
				this.props.toggleActiveComponent('allAnimals')
				this.loadOneAnimalFromServer();
			}.bind(this), 
			error: function(xhr, status, err){
				console.error('/animals/' + this.props.id, status, err.toString());
			}.bind(this)
		})
	},
	handleEditAnimalSubmit: function(event){
		event.preventDefault();
		var name = this.state.name;
		var habitat = this.state.habitat;
		var species = this.state.species;
		var diet = this.state.diet;

		this.updateAnimal({name: name, habitat: habitat, species: species, diet: diet})
	},
	onNameChange: function(event){
		this.setState({name: event.target.value});
	},
	onHabitatChange: function(event){
		this.setState({habitat: event.target.value});
	},
	onSpeciesChange: function(event){
		this.setState({species: event.target.value});
	},
	onDietChange: function(event){
		this.setState({diet: event.target.value});
	},
	componentDidMount: function(){
		this.loadOneAnimalFromServer();
	},


	render: function(){
		return (
			<div>
				<EditAnimalForm 
				name = {this.state.name}
				species = {this.state.species}
				habitat = {this.state.habitat}
				diet = {this.state.diet}
				handleEditAnimalSubmit = {this.handleEditAnimalSubmit}
				onNameChange = {this.onNameChange}
				onHabitatChange = {this.onHabitatChange}
				onSpeciesChange = {this.onSpeciesChange}
				onDietChange = {this.onDietChange}/>
			</div>
			);
	}
});

module.exports = EditAnimalData;