function pandaClick(){
  imgClick("panda.jpeg");
}

function ameClick(e){
  var img = e.target,
      aTag = img.parentElement;




   imgClick("america.jpeg");
}

function engClick(){
  imgClick("england.jpeg");
}


function itlClick(){
  imgClick("itaria.jpeg");
}

function rsaClick(){
  imgClick("rosia.jpeg");
}

function flnClick(){
  imgClick("france.jpeg");
}

function ezpClick(){
  imgClick("eziputo.jpeg");
}

function chnClick(){
  imgClick("china.jpeg");
}

function brzClick(){
  imgClick("brazil.jpeg");
}

function astClick(){
  imgClick("australia.jpeg");
}

function imgClick(target){
  document.getElementById('clear').style.display = "block";
  document.getElementById('himg').src = target;
}

function clearClick(){
  document.getElementById('clear').style.display = "none";

}
