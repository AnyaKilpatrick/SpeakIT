
$(".dropdownvalue").on("click", function(event){
    console.log("working")
    console.log(this)
    var lang = {
        language: $(this).attr("value")
    }
    console.log(lang.language)

    $.ajax("/languagesearch", {
        type: "POST",
        data: lang
    }).then(function(language){
        console.log("Test1"+language);
        window.location.replace("/language")
    })
})

// function displayFlag(){
//     console.log("DisplayFlag function is working");
//     var lang = $(".userlistImg").data("lang");
//     if(lang==="Ukrainian"){
//         console.log("Ukrainian flag");
//         $(".userlistImg").attr("src","assets/images/flag-of-Ukraine.png");
//     }
//     else if(lang==="Spanish"){
//         $(".userlistImg").attr('src','assets/images/flag-of-Spain.png');
//     }
//     else if(lang==="English"){
//         $(".userlistImg").attr('src','assets/images/flag-of-United-States-of-America.png');
//     }
//     else if(lang==="German"){
//         $(".userlistImg").attr('src','assets/images/flag-of-Germany.png');
//     }
// }
// displayFlag();

// function displayFriendFlag(){
//     console.log("DisplayFriendFlag function is working");
//     var lang = $(".friendFlag").data("lang");
//     if(lang =="Ukrainian"){
//         console.log("Ukrainian flag");
//         $(".friendFlag").attr("src","assets/images/flag-of-Ukraine.png");
//     }
//     else if(lang=="Spanish"){
//         $(".friendFlag").attr('src','assets/images/flag-of-Spain.png');
//     }
//     else if(lang=="English"){
//         $(".friendFlag").attr('src','assets/images/flag-of-United-States-of-America.png');
//     }
//     else if(lang=="German"){
//         $(".friendFlag").attr('src','assets/images/flag-of-Germany.png');
//     }
// }
// displayFriendFlag();