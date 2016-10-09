function validateArray(array) {
    var re = /^[0-9,]+$/;
    return re.test(array);
}

$(document).on('click','#testarray',function(){
    var inputValue = $('#arrayinput').val()
    if(inputValue.length == 0) {
        alert("Please fill the input field")
    } else if(validateArray(inputValue) && inputValue[inputValue.length-1]!=',') {
        $.ajax({
            url: "http://localhost:3000/passarray",
            method: "POST",
            data:  {array: inputValue}
        }).done(function(result) {
            $( '#stringarr' ).html( result );
        });
    } else {
        alert("Please fill the input field correct. E.g. 1,2,3,4,5")
    }
})
