// stories
$(document).ready(function(){
  var second = 1000;
  var minute = 60000;
  var toggle = false;
  var isPaused = true;

  // adds extra 0 to single digit numbers
  function add0(number){
    if (number < 10){
      return '0' + number.toString();
    }
    else {
      return number.toString();
    }
  }

  // returns the current time of the work session
  function work_time(custom_time){
    if (custom_time == null){
      return new Date(Date.parse(new Date()) + (minute * 25));
    }
    else {
      return new Date(Date.parse(new Date()) + (minute * custom_time));
    }
  }

  function break_time(custom_time){
    if (custom_time == null){
      return new Date(Date.parse(new Date()) + (minute * 5));
    }
    else {
      return new Date(Date.parse(new Date()) + (minute * custom_time));
    }
  }

  // calculate time remaining
  function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
      };
  }

  // start countdown and stop at end time
  // each second go back and re-render the clock
  // function initializeClock(endtime){
  //   $("#start").attr('id', 'stop');
  //   $("#start").text("Stop");
  var now = work_time();
  var timeinterval = setInterval(function(){
    if(!isPaused){
      var t = getTimeRemaining(now);
        if (t.total <= 0){
          clearInterval(timeinterval);
          ("#timer").text("Time's Up!");
        }
        $("#timer").text(add0(t.minutes) + ':' + add0(t.seconds));
      }
  },1000);

  // }

  // saves current time when timer is stopped

  // when start is clicked initialize the countdown
  $("#start").click(function(e) {
    e.preventDefault();
    isPaused = false;
  });

  // resets the clock to 25 minutes
  $('#reset').click(function (){
    isPaused = true;
    $("#timer").text("25:00");
  });

  // stops and saves the current timer
  $("#pause").click(function(e) {
    // make initializeClock pass the current time to the stop function
    // initializeClock
    // stop function
    e.preventDefault(e);
    isPaused = true;
  });
});
// TODO #timer isn't changing the html for some reason
// TODO the time remainig isn't changning
// TODO change the reset button
