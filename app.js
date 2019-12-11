var clock = document.getElementById('clock');

function myClock() {
  var time = new Date();
  var h = (time.getHours() % 12).toString();
  var m = time.getMinutes().toString();
  var s = time.getSeconds().toString();
  var x = 'p';

  if (time.getHours() < 12) {
    x = 'a';
  }

  if (h == '0') {
    h = '12';
  }

  if (h.length < 2) {
    h = '0' + h;
  }
  if (m.length < 2) {
    m = '0' + m;
  }
  if (s.length < 2) {
    s = '0' + s;
  }

  var clockStr = h + ":" + m + ":" + s + " " + x + "m";
  clock.textContent = clockStr;

}

myClock();
setInterval(myClock, 1000);
