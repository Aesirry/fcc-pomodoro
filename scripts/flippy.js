var clock;

clock = $('.clock').FlipClock({
      clockFace: 'DailyCounter',
      autoStart: false,
      callbacks: {
        stop: function() {
          $('.message').html('The clock has stopped!')
        }
      }
  });

  clock.setTime(220880);
  clock.setCountdown(true);
  clock.start();


// User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.
// start the timer button
// User Story: I can reset the clock for my next pomodoro.
//
// User Story: I can customize the length of each pomodoro.
