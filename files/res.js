console.log('hello res.js')
$(function() {
  $('.link1').on('click', function() {
    $.ajax({
       type: "GET",
       url: "example/a",
       data: "name=John&location=Boston",
       success: function(msg){
         alert( "Data Saved: " + msg );
       }
    });
  }); 
  $('.link2').on('click', function() {
    $.ajax({
       type: "GET",
       url: "example/b",
       data: "name=John&location=Boston",
       success: function(msg){
         alert( "Data Saved: " + msg );
       }
    });
  });  
  $('.link3').on('click', function() {
    $.ajax({
       type: "GET",
       url: "example/c",
       data: "name=John&location=Boston",
       success: function(msg){
         alert( "Data Saved: " + msg );
       }
    });
  });
  $('.link4').on('click', function() {
    $.ajax({
       type: "GET",
       url: "example/d",
       data: "name=John&location=Boston",
       success: function(msg){
         alert( "Data Saved: " + msg );
       }
    });
  });
});

