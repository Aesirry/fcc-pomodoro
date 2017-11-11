$(document).ready(function(){
  var time;
  var clock = $("#timer").FlipClock(10, {
    countdown: true,
    autoStart: false,

    onStop: function() {
      $("#message").text("Time stopped!");
    },
  });

  $("#start").click(function(){
    clock.start();
    time = clock.getFaceValue
    $("#message").text(time);

  });



});


// User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.
// start the timer button
// User Story: I can reset the clock for my next pomodoro.
//
// User Story: I can customize the length of each pomodoro.
