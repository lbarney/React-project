$(document).ready(function(){
  var dogs = [];

  function getDogs() {
    jQuery.ajax({
      method: "GET",
      url: "/dogs"
    }).then(function(response){
      dogs = response;
      for (var i = 0; i < dogs.length; i++) {
        console.log(dogs[i]._id);
        $(".getDogs").append(`<tr><td>` + dogs[i].name + `</td><td>` + dogs[i].breed + `</td><td>` + dogs[i].color + `</td> <td><button id="putDog" type="button" value="` + dogs[i]._id + `">PUT</button></td><td>
        <button id="deleteDog" type="button" value="` + dogs[i]._id + `">DELETE</button></td></tr>`);
      }
    });
  }

  function postDog(dog) {
    console.log(dog);
    jQuery.ajax({
      method: "POST",
      url: "/dogs",
      data: dog
    }).then(function(response){
      getDogs();
    });
  }

  $("#getDogs").click(function(){
    getDogs();
  });
  $("#postDog").click(function(){
    postDog({
      name:$("#dogName").val(),
      breed:$("#dogBreed").val(),
      color:$("#dogColor").val()
    });
  });
  // $("#putDog").click(function(){
  //   putDog({
  //     name:$("#dogName").val(),
  //     breed:$("#dogBreed").val(),
  //     color:$("#dogColor").val()
  //   });
  // })
  // $("#deleteDog").click(function(){
  //   deleteDog({
  //     name:$("#dogName").val(),
  //     breed:$("#dogBreed").val(),
  //     color:$("#dogColor").val()
  //   });
  // })


});
