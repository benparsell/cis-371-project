$(window).on('load', function(){
  $("body").on('click', '#sign-in-button', function (ev) {
    ev.preventDefault();
    console.log("yus")
    $('#sign-in').toggleClass('active');
  });

  $("#log-in").on('click', function (ev) {
    console.log("yus")
    $('#sign-in').toggleClass('active');
  });

  $('#card-number').mask('0000 0000 0000 0000');
  $('#card-exp').mask('00/0000');
  $('#card-ccv').mask('000');
  $('#zipcode').mask('00000');
  $('#state').mask('AA');


});
