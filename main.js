$(document).ready(function() {
    let timer;
    let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
    
    $('#startBtn').click(function() {
      if (!timer) {
        timer = setInterval(updateStopwatch, 100);
        $('#startBtn').prop('disabled', true);
        $('#stopBtn').prop('disabled', false);
        $('#resetBtn').prop('disabled', false);
      }
    });
    
    $('#stopBtn').click(function() {
      clearInterval(timer);
      timer = null;
      $('#startBtn').prop('disabled', false);
      $('#stopBtn').prop('disabled', true);
    });
    
    $('#resetBtn').click(function() {
      clearInterval(timer);
      timer = null;
      hours = minutes = seconds = milliseconds = 0;
      $('#stopwatch').text(formatTime(hours, minutes, seconds, milliseconds));
      $('#startBtn').prop('disabled', false);
      $('#stopBtn').prop('disabled', true);
      $('#resetBtn').prop('disabled', true);
    });
    
    function updateStopwatch() {
      milliseconds++;
      
      if (milliseconds === 10) {
        milliseconds = 0;
        seconds++;
        
        if (seconds === 60) {
          seconds = 0;
          minutes++;
          
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
      }
      
      $('#stopwatch').text(formatTime(hours, minutes, seconds, milliseconds));
    }
    
    function formatTime(hours, minutes, seconds, milliseconds) {
      return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
  });