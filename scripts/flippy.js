var clock;
var time;
var seconds = 1500;

clock = $('#timer').FlipClock(seconds, {
      autoStart: false,
      callbacks: {
        stop: function() {
          time = clock.getTime();
          if (time = clock.getTime().time === 0){
            $(".message").html("time's up!");
          }
        }
      }
  });
clock.setCountdown(true);

$("#start").click(function(){
  clock.start();
});
$("#pause").click(function(){
  clock.stop();
  $(".message").html('The clock is stopped!');
});
$("#reset").click(function(){
  clock.stop();
  clock.reset();
  seconds = 1500;
  clock.setTime(seconds);
});

$("#add1").click(function(){
  clock.stop();
  seconds += 60;
  clock.setTime(seconds);
  console.log(seconds);
});
$("#sub1").click(function(){
  clock.stop();
  seconds -= 60;
  clock.setTime(seconds);
  console.log(seconds);
});
