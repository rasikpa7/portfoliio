$(document).ready(function() {

    jQuery.validator.addMethod("noSpace", function(value, element) { 
       return value != "" && value[0]!=0 &&  value == value.match(/^[a-zA-Z]+$/);
    }, "Space and number are not allowed");

    
    $("#ajax-contact").validate({
      errorLabelContainer: $("#form-messages"),
      rules: {
        name: { required: true, noSpace: true },
        message: { required: true, },
      },
      messages: {
        name: { required: 'Please enter your name' },
        message : { required: "Please enter the message" }
      }
    });
  
    $('#submit').click(function() {
      var valid = $("#ajax-contact").valid();
      if(!valid) {
        return false;
      }
      $.ajax({
        beforeSend: function() {
          // display loading message
        },
        type: "POST",
        url: 'save',
        data:  $('#formdata').serialize(),
        dataType: 'json',
        cache: false,
        success: function(result) {
          if(result.error) {
            // show error message
          }
          else {
            // redirect to another page
          }
        },
        error: function (response, desc, exception) {
          // show ajax error
        },
        complete: function() {
          // hide loading message
        }
      });
    });
  });