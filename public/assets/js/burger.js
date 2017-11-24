//wait till all load?
$(function(){

  //add burger
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

  //devour burgers
  $(".devour").on("click", function(event){
    event.preventDefault;
    var idChange = $(this).data("id");
  //  console.log(idChange);

    //send put request
    $.ajax("/api/burgers/" + idChange, {
      type:"PUT",

    }).then(function(){
      location.reload();
    })
  })
})
