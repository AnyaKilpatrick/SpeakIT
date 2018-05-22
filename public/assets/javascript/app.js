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
// enable select input
$(document).ready(function() {
  $('select').material_select();
});

// validate sign-up form
$("#signUpForm").on('submit', function (e) {
  debugger
  // var focusSet = false;
    var usernameL = $("#newUserName").val().trim().length;
    if (usernameL < 5 ||usernameL > 15){
      $("#newUserName").parent().next(".validation").remove() //remove before inserting, to prevent from creating many divs on top of each other
      $("#newUserName").parent().after("<div class='validation' style='color:black;margin-bottom: 20px;'>Please enter username (5-15 characters)</div>");
      e.preventDefault();
    }else {
      $("#newUserName").parent().next(".validation").remove(); // remove it
    }

    var passwordL = $("#newUserPassword").val().trim().length;
    if(passwordL <5 || passwordL >10){
      $("#newUserPassword").parent().next(".validation").remove()
      $("#newUserPassword").parent().after("<div class='validation' style='color:black;margin-bottom: 20px;'>Please enter password (5-10 characters)</div>");
      e.preventDefault();
    }else {
      $("#newUserPassword").parent().next(".validation").remove(); // remove it
    }

    var aboutL = $("#newUserAbout").val().trim().length;
    if(aboutL <10 || aboutL >200){
      $("#newUserAbout").parent().next(".validation").remove();
      $("#newUserAbout").parent().after("<div class='validation' style='color:black;margin-bottom: 20px;'>Write about yourself (10-200 characters)</div>");
      e.preventDefault();
    }else {
      $("#newUserAbout").parent().next(".validation").remove(); // remove it
    }
});  
