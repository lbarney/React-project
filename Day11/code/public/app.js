var getDogs, postDog, putDog, deleteDog, login, register;
$(document).ready(function(){
  var dogs;

  getDogs = function() {
    $(".rowDogs").remove();
    $.ajax({
      method: "GET",
      url: "/dogs"
    }).then(function(response){
      dogs = response;
      for (var i = 0; i < dogs.length; i++) {
        $(".tableDogs").append(`
          <tr class="rowDogs">
          <td><input id='` + i + `name' type="text" value="` + dogs[i].name + `"></td>
          <td><input id='` + i + `breed'  id='` + i + `name'  type="text" value="` + dogs[i].breed + `"></td>
          <td><input id='` + i + `color'  type="text" value="` + dogs[i].color + `"></td>
          <td><button id="putDog" onClick="putDog(value, {
            name: $('#` + i + `name').val(),
            breed: $('#` + i + `breed').val(),
            color: $('#` + i + `color').val()
          });" type="button" value="` + dogs[i]._id + `">PUT</button></td>
          <td><button id="deleteDog" onClick="deleteDog(value);" type="button" value="` + dogs[i]._id + `">DELETE</button></td>
          </tr>`);
      }
    });
  };

  postDog = function(dog) {
    $.ajax({
      method: 'POST',
      url: '/dogs',
      data: dog
    }).then(function(response){
      getDogs();
    });
  };

  putDog = function(id, dog){
    $.ajax({
      method: 'PUT',
      url: '/dogs/' + id,
      data: dog
    }).then(function(response){
      getDogs();
    });
  };

  deleteDog = function(id){
    console.log("crash2");
    $.ajax({
      method: 'DELETE',
      url: '/dogs/' + id
    }).then(function(response){
      getDogs();
    });
  };

  login = function(loginobj) {
    $.ajax({
      method: "POST",
      url: "/login",
      data: loginobj
    }).then(function(response){
      console.log(response);
      $(".auth").hide();
    });
  };

  $(".pushtoregister").click(function(){
    $(".login").hide();
    $(".register").show();
  })

  $(".pushtologin").click(function(){
    $(".register").hide();
    $(".login").show();
  })

  $(".loginbutton").click(function(){
    var loginobj = {
      email: $(".loginemail").val(),
      password: $(".loginpassword").val()
    };
    login(loginobj);
  });

});
