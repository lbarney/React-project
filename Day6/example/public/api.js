$(document).ready(function(){
  var dogs;

  function getDogs() {
    $(".rowDogs").remove();
    $.ajax({
      method: "GET",
      url: "/dogs"
    }).then(function(response){
      dogs = response;
      for (var i = 0; i < dogs.length; i++) {
        $(".tableDogs").append(`
          <tr class="rowDogs">
          <td><input type="text" value="` + dogs[i].name + `"></td>
          <td><input type="text" value="` + dogs[i].breed + `"></td>
          <td><input type="text" value="` + dogs[i].color + `"></td>
          <td><button id="putDog" type="button" value="` + dogs[i]._id + `">PUT</button></td>
          <td><button id="deleteDog" type="button" value="` + dogs[i]._id + `">DELETE</button></td></tr>`);
      }
    });
  }

  function postDog(dog) {
    $.ajax({
      method: 'POST',
      url: '/dogs',
      data: dog
    }).then(function(response){
      getDogs();
    });
  }

  function putDog(dog, id){
    $.ajax({
      method: 'PUT',
      url: '/dogs/' + id,
      data: dog
    }).then(function(response){
      getDogs();
    });
  }

  function deleteDog(id){
    $.ajax({
      method: 'DELETE',
      url: '/dogs/' + id
    }).then(function(response){
      getDogs();
    });
  };

  $("#getDogs").click(function(){
    getDogs();
  });
  $("#postDog").click(function(){
    // postDog();
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
  //   }, $("input:value").val());
  // })
  // $("#deleteDog").click(function(){
  //   deleteDog($("input:value").val());
  // })


});
