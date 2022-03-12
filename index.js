

// $('.btn') .click (function () { 
//     $('.modal') .alert ('focus')
//   })



// $(".open").on("click", function() {
//   $(".popup-overlay, .popup-content").addClass("active");
// });

// //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
// $(".close, .popup-overlay").on("click", function() {
//   $(".popup-overlay, .popup-content").removeClass("active");
// });


//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
  });
  
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $(".close, .popup-overlay").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  });