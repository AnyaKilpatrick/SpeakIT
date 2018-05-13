// creating new user (sign up)
$("#signUpUser").on("click", function(event){
    event.preventDefault();
    function validateForm(){
        var isValid = true;

        var nameLength = $("#newUserName").val().trim().length;
        var passLength = $("#newUserPassword").val().trim().length;
        var aboutLength = $("#newUserAbout").val().trim().length;

        $(".newUserForm").each(function(){
            if($(this).val().trim() === ""){
                isValid=false;
            }   
        });
        
        if(passLength <=4 || passLength >=11){
            alert("password should be 5-10 characters long");
            isValid=false;
        }
        
        else if(nameLength <=1 || nameLength >=16){
            alert("name should be 5-15 characters long");
            isValid=false;
        }
        
        else if(aboutLength <=9 || aboutLength >=201){
            alert("write a little bit about yourself (10-200 characters)");
            isValid=false;
        }
        return isValid;
    }
    if (validateForm()){
        // grabbing input
        var newUser = {
            name:$("#newUserName").val().trim(),
            password:$("#newUserPassword").val().trim(),
            language:$("#newUserLanguage").val().trim(),
            gender:$("#newUserGender").val().trim(),
            age:$("#newUserAge").val().trim(),
            about:$("#newUserAbout").val().trim()
        }
        //sending post request
        $.ajax("/newprofile", {
            type: "POST",
            data:newUser
        }).then(function(){
            console.log("added new user");
        })
    }
})
