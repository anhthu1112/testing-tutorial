//setTimeout(() => console.log ("I love you!"), 10000)

var seconds = 0;

var interval = setInterval(() => {
  console.log(seconds);
  seconds++;
  if (seconds === 60) {
    clearInterval(interval);
  }
}, 1000);

var a = 10 
