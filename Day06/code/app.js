var cars = [{
  make: "Honda",
  model: "CRV",
  id: "123456"
},
{
  make: "Honda",
  model: "CRZ",
  id: "456123"
}];

var newcar = car;
newcar.model = "Civic";

var id = car.id;

function getcars() {
  $.ajax({
    method: "GET",
    url: '/cars'
  }).then(function(response){
    //code here
  });
}

function newCar(car) {
  $.ajax({
    method: 'POST',
    data: car,
    url: '/cars'
  }).then(function(response){
    getCars()
  });
}
function changeCar(newcar) {
  $.ajax({
    method: "PUT",
    url: '/cars/' + newcar.id,
    data: newcar
  }).then(function(response){
    getCars();
  });
}

function deleteCar(car) {
  $.ajax({
    method: "DELETE",
    url: '/cars/' + car.id
  }).then(function(response){
    getCars();
  });
}




























var cars;




    $.ajax({
      method: "GET",
      url: "/api"
    }).then(function(response){//setup asyncronous promise
      if(response) {
      console.log("get was successful");
    } else {
      console.log("error");
    }
    });

    $.ajax({
      method: 'POST',
      url: '/api',
      data: data
    }).then(function(response){//setup asyncronous promise
      console.log(response);//do something with response
    });

    $.ajax({
      method: 'PUT',
      url: '/api/' + id,
      data: data
    }).then(function(response){//setup asyncronous promise
      console.log(response);//do something with response
    });

    $.ajax({
      method: 'DELETE',
      url: '/api/' + id
    }).then(function(response){//setup asyncronous promise
      console.log(response);//do something with response
    });
