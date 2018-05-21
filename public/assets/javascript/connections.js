//This event handler looks for a button click of the addBtn class and passes that value to the newConnection object so it can be passed as the requstee for a new connection record in the Connections table
$(document).ready(function() {
    $(".addBtn").on("click", function(event){
        event.preventDefault();
        console.log($(this).attr("value"));
        var newConnection = {
            requesteeUN: $(this).attr("value")
        }
        console.log(newConnection.requesteeUN);
        $.ajax("/newconnection", {
            type: "POST",
            data:newConnection
        }).then(function(){
            console.log("added new connection");
        })
    })
})
