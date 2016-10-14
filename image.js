function pandaClick(){
  imgClick("panda.jpeg");
}

function kirinClick(){
   imgClick("kirin.jpeg");
}

function koaraClick(){
  imgClick("koara.jpeg");
}


function kangaruClick(){
  imgClick("kangaru.jpeg");
}

function kabaClick(){
  imgClick("kaba.jpeg");
}

function lionClick(){
  imgClick("lion.jpeg");
}

function washiClick(){
  imgClick("wasi.jpeg");
}

function kuziraClick(){
  imgClick("kuzira.jpeg");
}

function kumaClick(){
  imgClick("kuma.jpeg");
}

function imgClick(target){
  document.getElementById('clear').style.display = "block";
  document.getElementById('himg').src = target;
}

function clearClick(){
  document.getElementById('clear').style.display = "none";

}
