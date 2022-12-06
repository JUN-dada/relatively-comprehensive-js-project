let imgobj2 = new Image(); //图片对象用于提前提取图片地址
let imgobj3 = new Image();
let imgobj4 = new Image();
let imgobj1 = new Image();

//将图片地址放入图片对象中
imgobj1.src = "./image/img1.jpg";
imgobj2.src = "./image/img2.jpg";
imgobj3.src = "./image/img3.jpg";
imgobj4.src = "./image/img4.jpg";

//用数组存储图片对象与姓名对象
let imgArr = [imgobj1, imgobj2, imgobj3, imgobj4];
let tou = document.querySelector("#span1");
tou.textContent = location.search.split("?")[1];
//随机切换函数
function change() {
  str = "";
  let img = Math.floor(Math.random() * imgArr.length);
  document.getElementById("imgx").src = imgArr[img].src;
}
