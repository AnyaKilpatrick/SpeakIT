// materialize dropdown for choosing flag of native language
// $('.dropdown-trigger').on("click", function(){
//   console.log("I am clicking");
//   $(this).dropdown();
// });
// console.log("sanity")

// materialize drop down
$(document).ready(function () {
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on click
    alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
    gutter: 0, // Spacing from edge
    belowOrigin: false // Displays dropdown below the button
  });
});

$(document).ready(function() {
  $('select').material_select();
});
// $(document).ready(function(){
//   $('select').formSelect();
// });