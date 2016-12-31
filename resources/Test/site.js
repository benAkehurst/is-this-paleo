(function () {
    
    "use strict";

    var arr = [
        "apple",
        "chicken",
        "beef",
        "spinich",
        "poultry",
        "turkey", "chicken", "chicken breast", "pork tenderloin", "pork chops"
    ];


    $("#buttonCheck").click(function (e) {

        var input = $("#textBoxInput").val().toLowerCase();

        if ($.inArray(input, arr) != -1) {
            $("#spanAnswer").text("Good").css({"color": "green"});
        }
        else {
            $("#spanAnswer").text("Bad").css({ "color": "red" });
        }

    });

})();