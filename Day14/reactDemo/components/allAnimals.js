//Animalapp
	//AllAnimalsData
		//AllAnimals
			//AnimalCard
	//Toggle
	//AnimalPostData
		//AnimalPostForm



var React = require('react'); 
var AnimalCard = require('./animalCard.js');
//the following is a statless component because we didnt set state

function AllAnimals(props){
	var animals = props.animals.map(function(item){
		return <AnimalCard name = {item.name}
							species = {item.species}
							habitat = {item.habitat}
							diet = {item.diet}
							key = {item._id}
							id = {item._id}
							deleteAnimalFromServer = {props.deleteAnimalFromServer}
							getId = {props.getId}/>
	});

	return(
		<div>
			{animals}
		</div>
		)

};


module.exports = AllAnimals;
