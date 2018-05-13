home page : 
    id="logInBtn"
    id="signUpBtn"
sign in page:
    1) when customer fills form, submit btn will have  id="logInUser"
    2) there probably  has to be a go back to home page btn, in case customer changed mind.
    this btn had   id="goBackHome"
sign up page: 
    1) when customer fills form, submit btn will have   id="signUpUser"
    2) go back btn    id="goBackHome"

<button id="logInBtn"><a href="/login">log in</a></button>

<button id="signUpBtn"><a href ="/signup">sign up<a/></button>

<button id="goBackHome"><a href ="/">go back btn.....<a/></button>

app.js - front end

users.js - back end
when we push submit form we call a function with post request and validation has to go inside of that function. . so don't worry about writing js code for validation. hopefully materialize offers some classes for that too

id="newUserName"
id="newUserPassword"
id="newUserAge"
id="newUserGender"
id="newUserLanguage"
id="newUserAbout"
and please give a class to all of them  class="newUserForm"