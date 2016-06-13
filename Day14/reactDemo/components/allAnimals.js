var React = require('react'); //the following is a statless component
var AnimalCard = require('./animalCard.js');


function AllAnimals(props){
	var animals = props.animals.map(function(item){
		return <AnimalCard name = {item.name}
							species = {item.species}
							habitat = {item.habitat}
							diet = {item.diet}
							key = {item._id}
							id = {item._id}
							deleteAnimalFromServer = {props.deleteAnimalFromServer}/>
	});

	return(
		<div>
			{animals}
		</div>
		)

};


module.exports = AllAnimals;
