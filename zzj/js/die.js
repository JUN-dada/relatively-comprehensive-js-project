let musicselectbox = [...document.querySelectorAll(".musicselectbox")];

for (var i = 0; i < musicselectbox.length; i++) {
    musicselectbox[i].onclick = function () {
        for (var i = 0; i < musicselectbox.length; i++) {
            musicselectbox[i].style.background = "";
        }
        this.style.background = "pink";
    };
}

let boxdown = {x: 0, y: 0};
let boxup = {x: 0, y: 0};
let boxX = 0;
let boxY = 0;
let boxflag = false;
let target = null;
let boxmagin = 80;
let boxwidth = null;

document.body.addEventListener("mousemove", musicmousemove);

function musicmouseup(e) {
    boxflag = true;
    boxdown.x = e.clientX;
    boxdown.y = e.clientY;
    target = e.currentTarget;
    boxwidth = target.getBoundingClientRect().width;
    boxup.x = boxX;
    boxup.y = boxY;
    //固定位置
    
}

function musicmousedown(e) {
    boxflag = true;
    boxdown.x = e.clientX;
    boxdown.y = e.clientY;
    target = e.currentTarget;
    boxwidth = target.getBoundingClientRect().width;
    
}

function transbox(boxmouvex, movewidth) {
 
}


function musicmousemove(e) {
    if (boxflag) {
        boxX = boxup.x + e.clientX - boxdown.x;
        boxY = boxup.y + e.clientY - boxdown.y;
        target.style.transition = "none";
        target.style.transform = "translate(" + boxX + "px," + boxY + "px)";
        transbox(boxX, boxmagin + boxwidth);
    }
}


musicselectbox.forEach(function (value, index, array) {
    value.addEventListener("mousedown", musicmouseup);
    value.addEventListener("mouseup", musicmousedown);
});
