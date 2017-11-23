$("#add").on("click", function(event){
  //preventDefault
  event.preventDefault();

  var newburger = {
    name:${"#burger-input"}.val().trim()
  }

  //send the post request
  $.ajax("/api/burgers",{
    type:"POST",
    data:newburger
  }).then(
    location.reload();
  )


})
