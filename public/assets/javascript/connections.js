$(document).ready(function() {
    $("#connect").on("click", function(event){
        event.preventDefault();
        var newConnection = {
            //need to define what data we're passing here; s/b id of user from div on language.handlebars page
        }
        $.ajax("/newconnection", {
            type: "POST",
            data:newConnection
        }).then(function(){
            console.log("added new connection");
        })
    })
})