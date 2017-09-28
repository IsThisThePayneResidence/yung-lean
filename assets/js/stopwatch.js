
var clockStart = new Date().getTime();

var globalTime = {
  milliseconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0
};

var clicksCount = {
}

setInterval(function () {
  getImage();
}, 100);

setInterval(function () {
  refrestClicks();
}, 100);

function refrestClicks() {
  var stats = document.getElementById('clicks');
  stats.innerHTML = "";
  for (var i in clicksCount) {
    var parent = document.createElement("div");
    var imgP = document.createElement("p");
    var img = document.createElement("img");
    img.src = i;
    img.height = 80;
    imgP.appendChild(img);
    var count = document.createElement("div");
    var countP = document.createElement("p");
    count.className = "caps-2";
    count.innerHTML = clicksCount[i];
    parent.className = "col-sm-3";
    countP.appendChild(count);
    parent.appendChild(imgP);
    parent.appendChild(countP);
    stats.appendChild(parent);
  }
}

function initStopwatch() {
  var timeNow = new Date().getTime();
  var timeDiff = timeNow - clockStart;
  globalTime.milliseconds = timeDiff;
  globalTime.seconds += Math.floor(timeDiff / 1000);
  globalTime.minutes += Math.floor(globalTime.seconds / 60);
  globalTime.hours += Math.floor(globalTime.minutes / 60);
  if (timeDiff > 999) {
    clockStart = new Date().getTime();
  }
  if (globalTime.seconds > 59) {
    globalTime.seconds = 0;
  }
  if (globalTime.minutes > 59) {
    globalTime.minutes = 0;
  }
  return globalTime;
}

function getTime() {
  var time = initStopwatch();
  document.getElementById("time").innerHTML =
                                      "" +
                                      time.hours + ":" +
                                      time.minutes + ":" +
                                      time.seconds + "." +
                                      time.milliseconds;
  window.setTimeout(function() {
    getTime();
  }, 10);
}

function onClick(id) {
  var img = document.getElementById(id);
  if (img.src in clicksCount)
    ++clicksCount[img.src];
  else
    clicksCount[img.src] = 1;
}

function getImage() {
  var time = document.getElementById("time").innerHTML;
  for (var i in time) {
    if (time[i] == "6") {
      //createImageAndDeleteItAfterTime("assets/images/young-yung-lean.gif", 600, onClick);
      createImageAndDeleteItAfterTime("assets/images/yung-lean-dancing.gif", 600, onClick);
    } else if (time[i] == "9") {
      createImageAndDeleteItAfterTime("assets/images/yung-lean-texting.gif", 600, onClick);
    }
  }
  var i = 0;
  while (i < time.length) {
    if (time[i] == "7") {
      createImageAndDeleteItAfterTime("assets/images/yung-lean-dancing.gif", 600, onClick);
    } else if (time[i] == "2") {
      createImageAndDeleteItAfterTime("assets/images/yung-lean-rapping.gif", 600, onClick);
    }
    ++i;
  }
}

function createImageAndDeleteItAfterTime(source, time, onclick, onmouseover, onmouseout) {
  var top = Math.floor(Math.random() * 60);
  var left = Math.floor(Math.random() * 80);
  var rotate = Math.floor(Math.random() * 80) - 40;
  var width = Math.floor(Math.random() * 500);
  var img = document.createElement("img")
  img.id = "img-" + top + "-" + left;
  img.style.position = "absolute";
  img.style.top = top + "%";
  img.style.left = left + "%";
  img.style.transform = "rotate(" + rotate + "deg)";
  img.width = width;
  img.src = source;
  img.onclick = function () {
    onclick(img.id);
  };
  document.body.appendChild(img);
  setTimeout(function () {
    removeImage(img.id);
  }, time);
}

function removeImage(id) {
  remove(id);
}

function remove(id) {
    return (elem = document.getElementById(id)).parentNode.removeChild(elem);
}
