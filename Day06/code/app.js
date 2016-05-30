


    $.ajax({
      method: "GET",
      url: "/api"
    }).then(function(response){//setup asyncronous promise
      console.log(response);//do something with response
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
