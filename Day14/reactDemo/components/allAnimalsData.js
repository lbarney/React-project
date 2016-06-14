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
var AllAnimals = require('./allAnimals.js');


var AllAnimalsData = React.createClass({
	getInitialState: function(){ 
		return {
			animals : []
		}

	},
	deleteAnimalFromServer: function(id){
		var self = this;
		$.ajax({
			url:'/animals/' + id,
			method: 'DELETE'
		}).done(function(){
			self.getAllAnimalsFromServer();
		})
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

		

		return this.state.animals ? <AllAnimals getId = {this.props.getId} deleteAnimalFromServer = {this.deleteAnimalFromServer} animals = {this.state.animals} /> : null;
		
	}
});

module.exports = AllAnimalsData;
