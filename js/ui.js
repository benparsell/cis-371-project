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
});
