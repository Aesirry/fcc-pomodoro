// stories
$(document).ready(function(){
  // have to convert time into minutes
  // convert minutes number into string
  var minutes = Math.floor(1500 / 60);
  var seconds = 0;
  // adds extra 0
  function add0(number){
    if (number < 10){
      return '0' + number.toString();
    }
    else {
      return number.toString();
    }
  }
  // what to do when

  $("#timer").text(add0(minutes) + ':' + add0(seconds));
});
