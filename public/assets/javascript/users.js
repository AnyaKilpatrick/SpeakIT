$("#languagebtn").on("click", function(event){
    // event.preventDefault();
    console.log("working")
    var lang = {
        language: $("#languagechoice").val().trim()
    }
    $.ajax("/languagesearch", {
        type: "POST",
        data: lang
    }).then(function(language){
        console.log("Test1"+language);
        window.location.replace("/language")
    })
})


// $.ajax("/signup", {
//     type: "PUT",
//     data:newUser
// }).then(function(){
//     console.log("sent new user ajax object");
// })

// $("#signUpUser").on("click", function(event){
//     event.preventDefault();
//     console.log("sign up btn was clicked");
// })
// $("#logInUser").on("click", function(event){
//     event.preventDefault();
// })
// // creating new user (sign up)
$("#signUpUser2").on("click", function(event){
    // event.preventDefault();
    // function validateForm(){
    //     var isValid = true;

    //     var nameLength = $("#newUserName").val().trim().length;
    //     var passLength = $("#newUserPassword").val().trim().length;
    //     // var aboutLength = $("#newUserAbout").val().trim().length;

    //     $(".newUserForm").each(function(){
    //         if($(this).val().trim() === ""){
    //             isValid=false;
    //         }   
    //     });
        
    //     if(passLength <=4 || passLength >=11){
    //         alert("password should be 5-10 characters long");
    //         isValid=false;
    //     }
        
    //     else if(nameLength <=4 || nameLength >=16){
    //         alert("name should be 5-15 characters long");
    //         isValid=false;
    //     }
        
        // else if(aboutLength <=9 || aboutLength >=201){
        //     alert("write a little bit about yourself (10-200 characters)");
        //     isValid=false;
        // }
    //     return isValid;
    // }
    // if (validateForm()){
    //     // grabbing input
        var newUser = {
            // name:$("#newUserName").val().trim(),
            // password:$("#newUserPassword").val().trim(),
            language:$("#newUserLanguage").val().trim(),
            gender:$("#newUserGender").val().trim(),
            age:$("#newUserAge").val().trim(),
            about:$("#newUserAbout").val().trim()
        }
        //sending post request
        $.ajax("/signup", {
            type: "PUT",
            data:newUser
        }).then(function(){
            console.log("sent new user ajax object");
        })
        
})
// loggin user
// $("#logInUser").on("click", function(event){

//     var loginInfo = {
//         user_name:$("#userName").val().trim(),
//         password:$("#password").val().trim()
//     }
//     console.log(loginInfo);
//     $.ajax("/loginrequest", {
//         type: "POST",
//         data: loginInfo
//     }).then(function(){
//         console.log("it worked!")
//         localStorage.loggedIn = true;
//     })
// })