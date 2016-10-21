function imgClick(e){
  var img = e.target;
  var aTag = img.parentElement.previousElementSibling;
  var bTag = img.parentElement.nextElementSibling;

  var zName = aTag.innerHTML;
  var zText = bTag.innerHTML;

  document.getElementById('clear').style.display = "block";
  document.getElementById('zoomBox').style.display = "block";
  document.getElementById('hname').innerHTML = zName;
  document.getElementById('himg').src = img.src;
  document.getElementById('htext').innerHTML = zText;

  window_load()
}

function clearClick(){
  document.getElementById('clear').style.display = "none";
  document.getElementById('zoomBox').style.display = "none";
}

window.onresize = window_load;

function window_load() {
	var sW = window.innerWidth;
	var sH = window.innerHeight;

  var zbH = zoomBox.clientHeight;
  var zbW = zoomBox.clientWidth;

	document.getElementById("clear").style.width = sW + "px";
  document.getElementById("clear").style.height = sH + "px";
  document.getElementById("zoomBox").style.top = (sH - zbH) / 2 + "px";
  document.getElementById("zoomBox").style.left = (sW - zbW) / 2 + "px";
}
