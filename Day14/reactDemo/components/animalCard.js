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


var AnimalCard = React.createClass({
	render: function(){
		return (
			<div>
				<div className = 'well col-xs-4'>

					<h3>Name is: {this.props.name} </h3>
					<h3>Species is: {this.props.species} </h3>
					<h3>Habitat is: {this.props.habitat} </h3>
					<h3>Diet is: {this.props.diet} </h3>
					<button className = 'btn btn-success' onClick = {this.props.getId.bind(null,'editOneAnimal',this.props.id)}>EDIT</button>
					<button className = 'btn btn-danger' onClick = {this.props.deleteAnimalFromServer.bind(null, this.props.id)}>DELETE</button>

				</div>
			</div>
			)
	}
});
module.exports = AnimalCard;