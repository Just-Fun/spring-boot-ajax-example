$(document).ready(function () {

    $("#search-form").submit(function (event) {
        // $("#search-form").onreadystatechange(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        // fire_ajax_submit();

    });

    $("input").keydown(function () {
        $("input").css("background-color", "yellow");
    });
    $("input").keyup(function () {
        $("input").css("background-color", "#bfff00");
        // $("input").css("background-color", "transparent");
    });

    /*if (value.length >= minlength ) {
     if (searchRequest != null)
     searchRequest.abort();
     searchRequest = $.ajax({
     type: "GET",
     url: "sample.php",
     data: {
     'search_keyword' : value
     },
     dataType: "text",
     success: function(msg){
     //we need to check if the value is the same
     if (value==$(that).val()) {
     //Receiving the result of search here
     }
     }
     });
     }*/

    var minLength = 3;
    $("input").keyup(function (event) {

        var value = $(this).val();
        if (value.length >= minLength) {

            // fire_ajax_submit();
            getModifiedString(value);

            var keyNumber = event.which;
            $("output").html("Key: " + keyNumber);
            $(".answer").html("Value: " + value);
        }
    });

});

function getModifiedString(value) {

/*    var search = {}
    search["username"] = $("#username").val();
    //search["email"] = $("#email").val();*/

    // $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        // url: "/api/getModifiedString",
        url: "/api/getUser",
        // url: "http://localhost:9000/hello-world/getString",
        // url: "http://localhost:9003/api/getUser",
        // data: JSON.stringify(value),
        data:  value,
        // dataType: 'json',
        dataType: "text",
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Ajax Response</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

            console.log("SUCCESS : ", data);
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

}

/*
function fire_ajax_submit() {

    var search = {}
    search["username"] = $("#username").val();
    //search["email"] = $("#email").val();

    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/search",
        data: JSON.stringify(search),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Ajax Response</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

            console.log("SUCCESS : ", data);
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

}*/
