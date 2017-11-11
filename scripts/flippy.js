$(document).ready(function(){
  var time;
  var clock = $("#timer").FlipClock(500, {
    countdown: true,
    autoStart: false,
    onStop: function() {
      $("#message").text("Time stopped!");
    },
  });
  $("#start").click(function(){
    clock.start();
    $("#message").text("whatever");
  });
  $("#reset").click(function(){

  });
  $("#pause").click(function(){

  });
  $("#add_1").click(function(){

  });
  $("#sub_1").click(function(){

  });
});


// User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.
// start the timer button
// User Story: I can reset the clock for my next pomodoro.
//
// User Story: I can customize the length of each pomodoro.
