// materialize date picker for age on user sign up
// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.datepicker');
//   var instances = M.Datepicker.init(elems, options);
// });

// Or with jQuery

// $(document).ready(function () {
//   $('.datepicker').datepicker();
// });

// materialize dropdown for choosing flag of native language
$('.dropdown-trigger').on("click", function(){
  console.log("I am clicking");
  $(this).dropdown();
});
console.log("sanity")