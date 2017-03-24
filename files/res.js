console.log('hello res.js')
$(function() {
  $('.link1').on('click', function() {
    $.ajax({
       type: "GET",
       url: "res/example/a",
       data: "name=John&location=Boston",
       success: function(msg){
         alert( "Data Saved: " + msg );
       }
    });
  }); 
  $('.link2').on('click', function() {
    $.ajax({
       type: "GET",
       url: "res/example/b",
       data: "name=John&location=Boston",
       success: function(msg){
         alert( "Data Saved: " + msg );
       }
    });
  });  
  $('.link3').on('click', function() {
    $.ajax({
       type: "GET",
       url: "res/example/c",
       data: "name=John&location=Boston",
       success: function(msg){
         alert( "Data Saved: " + msg );
       }
    });
  });
  $('.link4').on('click', function() {
    $.ajax({
       type: "GET",
       url: "res/example/d",
       data: "name=John&location=Boston",
       success: function(msg){
         alert( "Data Saved: " + msg );
       }
    });
  });

  $('.json').on('click', function() {
    $.ajax({
       type: "GET",
       dataType: "json",
       url: "res/example/json",
       data: "name=John&location=Boston",
       success: function(msg){
         alert( "Data Saved: " + msg );
       }
    });
  });


});

