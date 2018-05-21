
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