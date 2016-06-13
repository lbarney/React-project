var React = require('react');
var AllAnimalsData = require('./allAnimalsData.js')
var Toggle = require('./toggle.js');
var AnimalPostData = require('./animalPostData');

var AnimalApp = React.createClass({
	getInitialState: function(){
		return{
			activeComponent: 'allAnimals',
			activeAnimalId: null
		}
	},
	getId: function(component,id){
		if(component === 'editOneAnimal'){
			return this.setState({activeAnimalId : id, activeComponent: 'editAnimal'})
		}else{
			return null;
		}
	},



	showComponent: function(){
		if(this.state.activeComponent === 'allAnimals'){
			return <AllAnimalsData getId = { this.getId }/>
		}else if(this.state.activeComponent === 'postAnimalForm'){
			return <AnimalPostData toggleActiveComponent={this.toggleActiveComponent}/>
		}else{
			throw new Error('No Active Component', this.state.activeComponent)
		}

	},

	toggleActiveComponent: function(name){
		this.setState({activeComponent: name})
	},



	render: function(){
		return (
			<div>
				<Toggle toggleActiveComponent={this.toggleActiveComponent}/>
				{ this.showComponent() }
				
			</div>
			)

	}
});

module.exports = AnimalApp;