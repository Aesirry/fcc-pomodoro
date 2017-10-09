// stories
$(document).ready(function(){
  var second = 1000;
  var minute = 60000;

  // adds extra 0
  function add0(number){
    if (number < 10){
      return '0' + number.toString();
    }
    else {
      return number.toString();
    }
  }

  // endtime should be now + 25 minutes by default. default can be changed from a button
  var default_work_time = new Date(Date.parse(new Date()) + (minute * 25));
  var default_break_time = new Date(Date.parse(new Date()) + (minute * 5));

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

  // countdown and stop at end time
  // each second go back and re-render the clock
  function initializeClock(endtime){
    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(endtime);
      if (t.total <= 0){
        clearInterval(timeinterval);
      }
      $("#timer").text(add0(t.minutes) + ':' + add0(t.seconds));
    },1000);
  }

  // when start is click initialize the countdown
  $("#start").click(function() {
    initializeClock(default_work_time);
  });


  // function addMinute(current_time){
  //   return current_time + minute;
  // }
  //
  // function subMinute(current_time){
  //   return current_time - minute;
  // }
});
