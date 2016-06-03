var getDogs, postDog, putDog, deleteDog, dogs;
$(document).ready(function(){


  getDogs = function() {
    console.log("We're Getting")
    $(".rowDogs").remove();
    $.ajax({
      method: "GET",
      url: "/dogs"
    }).then(function(response){
      console.log("We got", response);
      dogs = response;
      for (var i = 0; i < dogs.length; i++) {
        $(".tableDogs").append(`<tr class="rowDogs">
            <td>
              <input id = "` + i + `name" value="` + dogs[i].name + `"/>
            </td>
            <td>
              <input id = "` + i + `breed" value="`+ dogs[i].breed +`"/>
            </td>
            <td>
              <input id = "` + i + `legs" value="`+ dogs[i].legs +`"/>
            </td>
            <td>
              <button onClick="putDog(value, ` + i +`);" value="` + dogs[i]._id + `">PUT</button>
            </td>
            <td>
              <button onClick="deleteDog(value);" value="` + dogs[i]._id + `">DELETE</button>
            </td>
          </tr>`);
        }

      // for (var i = 0; i < dogs.length; i++) {
      //   $(".tableDogs").append(`
      //     <tr class="rowDogs">
      //     <td>
      //     <input id='` + i + `name' type="text" value="` + dogs[i].name + `">
      //     </td>
      //     <td>
      //     <input id='` + i + `breed'  id='` + i + `name'  type="text" value="` + dogs[i].breed + `">
      //     </td>
      //     <td>
      //     <input id='` + i + `color'  type="text" value="` + dogs[i].color + `">
      //     </td>
      //     <td>
      //     <button id="putDog" onClick="putDog(value, {name:` + i + `, breed:` + i + ` , color:` + i + ` })" type="button" value="` + dogs[i]._id + `">PUT</button>
      //     </td>
      //     <td>
      //     <button id="deleteDog" onClick="deleteDog(value);" type="button" value="` + dogs[i]._id + `">DELETE</button>
      //     </td>
      //     </tr>`);
      // }
    });
  };

  getDogs();

$("#postDog").on("click", function(){
  var newdog = {
    name: $("#dogName").val(),
    breed: $("#dogBreed").val(),
    legs: $("#dogLegs").val()
  };
  postDog(newdog);
})

  postDog = function(dog) {
    $.ajax({
      method: 'POST',
      url: '/dogs',
      data: dog
    }).then(function(response){
      getDogs();
      $("#dogName").val("");
      $("#dogBreed").val("");
      $("#dogLegs").val("");
    });
  };

  putDog = function(id, num){
    var newdog = {
      name: $("#" + num + "name").val(),
      breed: $("#" + num + "breed").val(),
      legs: $("#" + num + "legs").val()
    };
    $.ajax({
      method: 'PUT',
      url: '/dogs/' + id,
      data: newdog
    }).then(function(response){
      getDogs();
    });
  };

  deleteDog = function(id){
    $.ajax({
      method: 'DELETE',
      url: '/dogs/' + id
    }).then(function(response){
      getDogs();
    });
  };



  // $("#getDogs").on("click",function(){
  //   getDogs();
  // });

  // $("#postDog").click(function(){
  //   // postDog();
  //   postDog({
  //     name:$("#dogName").val(),
  //     breed:$("#dogBreed").val(),
  //     color:$("#dogColor").val()
  //   });
  // });
  // $("#putDog").click(function(){
  //   putDog({
  //     name:$("#dogName").val(),
  //     breed:$("#dogBreed").val(),
  //     color:$("#dogColor").val()
  //   }, $("input:value").val());
  // })


});
