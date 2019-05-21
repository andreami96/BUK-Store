function login() {
    $.ajax({
        type: "POST",
        url: "/api/v1/login",
        data: JSON.stringify({
            "email": $('#email').val(),
            "password": $('#password').val()
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            console.log(data);
            $(location).attr('href', '/');
            },
        failure: function(errMsg) {
            console.log(errMsg);
        }
    });
}