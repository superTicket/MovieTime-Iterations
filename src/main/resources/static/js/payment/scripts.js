function proceed() {
    post('/finish', {
        email:$("input[name=email]").val(),
        phone:$("input[name=phone]").val(),
    })
}