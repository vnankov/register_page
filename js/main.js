$(function () {

  $("#name_error").hide();
  $("email_error").hide();
  $("password_error").hide();
  $("confirm_password_error").hide();

  var error_name = false;
  var error_email = false;
  var error_password = false;
  var error_confirm_password = false;


  $("#name").focusout(function (){
    check_name();
  });
  $("#email").focusout(function (){
    check_email();
  });
  $("#password").focusout(function (){
    check_password();
  });
  $("#confirm_password").focusout(function (){
    check_confirm_password();
  });


  function check_name() {
    var name_length = $("#name").val().length;
    if(name_length < 4 || name_length > 12){
      $("#name_error").html("*Should be between 4-12 symbols");
      $("#name_error").show();
      error_name = true;
    }else {
      $("#name_error").hide();
    }
  }

  function check_email(){
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    if(pattern.test($("#email").val())){
      $("#email_error").hide();
    }else {
      $("#email_error").html("*Invalid email address");
      $("#email_error").show();
      error_email = true;
    }
  }

  function check_password() {
    var pattern_password = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,12}$/);
    if (pattern_password.test($("#password").val())) {
      $("#password_error").hide();
    }
    else {
      $("#password_error").html("*Should contain upper, lower case letter, number and to be between 6 - 12 characters");
      $("#password_error").show();
      error_password = true;
    }
  }

  function check_confirm_password() {
    var old_password = $("#password").val();
    var new_password = $("#confirm_password").val();

    if( old_password != new_password){
      $("#confirm_password_error").html("*Passwords does not match");
      $("#confirm_password_error").show();
      error_confirm_password = true;
    }else {
      $("#confirm_password_error").hide();
    }

  }


  $("#form").submit(function(){
    error_name = false;
    error_email = false;
    error_password = false;
    error_confirm_password = false;

    check_name();
    check_email();
    check_password();
    check_confirm_password();

   if(error_name == false &&
       error_email == false &&
       error_password == false &&
       error_confirm_password == false){
         return true;
       }else {
         return false;
       }
  });
});
