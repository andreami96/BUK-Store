$(document).ready(function () {
    $('#email')
        .focus()
        .keydown(function (event) {
        if(event.key === "Enter")
            $('#login-btn').click();
    });
    $('#password').keydown(function (event) {
        if(event.key === "Enter")
            $('#login-btn').click();
    });
});

function login() {

    let email = $('#email').val();
    let password = $('#password').val();

    let message;
    let mailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    $.ajax({
        type: "POST",
        url: "/api/v1/login",
        data: JSON.stringify({
            "email": email,
            "password": password
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            console.log(data);
            $(location).attr('href', '/me');
            },
        error: function(xhr) {
            if(!email || !password)
                message = "Email or Password parameter is missing";
            else if(!mailRegex.test(email))
                message = "The email should be an email address";
            else
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