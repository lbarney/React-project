$(document).ready(function(){

  $.ajax({
    method: "POST",
    url: '/login',
    data: {
      username: "Steveee",
      password: "steve-O"
    }
  }).then(function(response){
    console.log(response);
    console.log("Logged In");
  });
});
