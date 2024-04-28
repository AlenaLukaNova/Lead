function startCountdown() {
  var endDate = new Date('Jul 24, 2024 12:00:00').getTime();

  var timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;
    if (t >= 0) {
      let day = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let min = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let sec = Math.floor((t % (1000 * 60)) / 1000);

      document.querySelector(".counting_day").innerHTML = day;
      document.querySelector(".counting_hourse").innerHTML = ("0" + hours).slice(-2);
      document.querySelector(".counting_min").innerHTML = ("0" + min).slice(-2);
      document.getElementById("sec").innerHTML = ("0" + sec).slice(-2);
    } else {
      clearInterval(timer);
      document.querySelector(".watch").innerHTML = "Время истекло!";
    }
  }, 1000);
}

startCountdown();