// Log in event

var newUser

$(".submit").on("click", function (event) {
  event.preventDefault();
  // enter_text jquery string #enter_text.val()

  $.post("/api/", newUserForm,
    function (data) {
      // posting data to an endpoint
    });
});

// materialize date picker for age on user sign up
// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.datepicker');
//   var instances = M.Datepicker.init(elems, options);
// });

// materialize dropdown for choosing flag of native language
$('.dropdown-trigger').dropdown();

// array of flag art to replace user input of native language choice
// for loop to loop through array of flag options