$(document).ready(function () {

    $('#name').focus().keydown(function (event) {
        if(event.key === "Enter")
            $('#signup-btn').click();
    });

    $('#surname').keydown(function (event) {
        if(event.key === "Enter")
            $('#signup-btn').click();
    });

    $('#email').keydown(function (event) {
        if(event.key === "Enter")
            $('#signup-btn').click();
    });

    $('#password').keydown(function (event) {
        if(event.key === "Enter")
            $('#signup-btn').click();
    });

    $('#repeatedPassword').keydown(function (event) {
        if(event.key === "Enter")
            $('#signup-btn').click();
    });

    if($(window).width() > 576)
        nameAndSurnameFields(true);
    else
        nameAndSurnameFields(false);

    $(window).resize(function() {
        nameAndSurnameFields(!($('.navbar-toggler').is(':visible')))
    });
});

function nameAndSurnameFields(align) {
    if(align) {
        $('#surname').remove();
        $('#onResized')
            .empty()
            .removeClass("form-group input-group");
        $('#userdata-form')
            .append("<input type=\"text\" autocomplete=\"family-name\" class=\"form-control\" placeholder=\"Last Name\" id=\"surname\">");
    } else {
        $('#surname').remove();
        $('#onResized')
            .empty()
            .addClass("form-group input-group")
            .append("<div class=\"input-group-prepend\">\n" +
                "   <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n" +
                "</div>\n" +
                "<input type=\"text\" autocomplete=\"family-name\" class=\"form-control\" placeholder=\"Last Name\" id=\"surname\">")
    }
}

function signUpNewUser() {

    let name = $('#name').val();
    let surname = $('#surname').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let repeatPass =  $('#repeatedPassword').val();

    let message;
    let mailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if(!name || !surname || !email || !password)
        message = "Some parameter is missing";
    else if(!mailRegex.test(email))
        message = "The email should be an email address";
    else if(password.length < 6 || password.length > 32)
        message = "The password should be between 6 and 32 character";
    else if(password !== repeatPass) {
        password = "";
        message = "The passwords should match";
    }

    $.ajax({
        type: "POST",
        url: "/api/v1/signup",
        data: JSON.stringify({
            "name": name,
            "surname": surname,
            "email": email,
            "password": password
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){

            $("#name").val("");
            $("#surname").val("");
            $("#email").val("");
            $("#password").val("");
            $("#repeatedPassword").val("");

            message = "Welcome to the BUK application, please check your email to activate your new account";

            $('#alert')
                .html("<div class=\"text-center alert alert-success alert-dismissible text-center mx-auto fade show\">\n" +
                    "            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
                    "            <strong>Registration Complete!</strong><br>" + message +
                    "        </div>");
            $(".alert")
                .on("closed.bs.alert", function () {
                    window.location.href = "/";
                })
                .delay(2000)
                .fadeOut(500, function () {
                    $(this).alert('close');
                });
        },
        error: function(xhr) {

            if(xhr.status !== 400 || !message)
                message = xhr.responseJSON.description;

            $('#alert')
                .html("<div class=\"text-center alert alert-danger alert-dismissible text-center mx-auto fade show\">\n" +
                    "            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
                    "            <strong>Alert!</strong><br>" + message +
                    "        </div>");
            $(".alert").delay(2000).fadeOut(500);
        }
    });

}