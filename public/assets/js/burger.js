$(function(){
  $("#add").on("click", function(event){
    //preventDefault
    event.preventDefault();
    var newOne = $("#burger-input").val().trim()

    console.log(newOne)

    var newburger = {
      name:newOne
    }

    //send the post request
    $.ajax("/api/burgers",{
      type:"POST",
      data:newburger
    }).then(function(){
          location.reload();
    })
  })
})
