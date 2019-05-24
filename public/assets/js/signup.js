function signUpNewUser() {

    let name = $('#name').val();
    let surname = $('#surname').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let repeatPass =  $('#repeatedPassword').val();

    let message;
    let mailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if(!name || !surname || !email || !password)
        message = "Some parameters is missing";
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

            message = "Welcome to the BUK application, please check your email to activate your new account";

            $('#alert')
                .html("<div class=\"text-center alert alert-success alert-dismissible text-center mx-auto fade show\">\n" +
                    "            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
                    "            <strong>Registration Complete!</strong><br>" + message +
                    "        </div>");
            console.log(xhr)
        },
        error: function(xhr) {

            if(xhr.status !== 400)
                message = xhr.responseJSON.description;

            $('#alert')
                .html("<div class=\"text-center alert alert-danger alert-dismissible text-center mx-auto fade show\">\n" +
                    "            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n" +
                    "            <strong>Alert!</strong><br>" + message +
                    "        </div>");
            console.log(xhr)
        }
    });

}