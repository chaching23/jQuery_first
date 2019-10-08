$("#apple").click(function() {
    $(this).hide();
})



$("#marko").hide();

$("#banana").click(function() {
    $("#marko").show();
})

$("#carrot").click(function(){
    $("#angelo").toggle();
  });


$("#dudes").click(function(){
    $("#mike").slideUp();
  });

  $("#chicks").click(function(){
    $("#mike").slideDown();
  });

  $("#eel").click(function(){
    $("#lakers").slideToggle();
  });
  $("#fish").click(function(){
    $("#lakers-2").fadeOut();
  });
  $("#fish-2").click(function(){
    $("#lakers-2").fadeIn();
  });

  $("#gorilla").click(function(){
    $("#hella").addClass("fire");
  });

  $("#hill").click(function(){
    $("#kella").before("<p>angelo is fire<p>");
  });

  $("#ig").click(function(){
    $("#della").after("<p>angelo is fire<p>");
  });

  $("#jokes").click(function(){
    $("#tella").append("bangers is fire");
  });

  $("#kiki").click(function(){
    $("#bella").html("fire fire fire");
  });

  $("#x").click(function(){
    $("img").attr("width","2000");
  });

  $("#y").click(function(){
    $("input:text").val("bangers is fire");
  });

  $("#z").click(function(){
    $("#zz").text("fire fire fire");
  });