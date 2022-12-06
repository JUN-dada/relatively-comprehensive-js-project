let singinformation = [
    {
        title: "打上花火",
        singer: "DAOKO×米津玄師",
        img: "../img/img1.jpg",
        text: "樱花落下的速度是每秒五厘米， 我该用怎么样的速度，才能与你相遇。 雨滴降落的速度是每秒十米，我该用怎么样的速度，才能将你挽留。 陨石坠落的速度是每秒十千米，我该用怎么样的速度，才能将你拯救。 烟花消散的速度是每秒三亿米，我该用什么样的速度，才能将你追回",
        audio: "../audio/打上花火.mp3"
    },
    {
        title: "灰色と青",
        singer: "米津玄師×菅田将暉",
        img: "../img/img2.jpg",
        text: "自先沉稳，而后爱人",
        audio: "../audio/灰色的青.mp3"
    },
    {
        title: "LOSER",
        singer: "米津玄師",
        img: "../img/img3.jpg",
        text: "我是个loser 很久以前就已经听到，那不知何时被深藏于口袋之中的声音，这也好那也好我才不管 预兆出不详的天空",
        audio: "../audio/LOSER.mp3"
    }

];


let saohua = ["喜欢蓝色，因为 blue=Because love you everyday. 意思是：因为爱你每一天",
    "喜欢红色，因为 red=Remember every day. 意思是：记住每一天",
    "喜欢黄色，因为 yellow=You are my everything. 意思是：你是我的一切",
    "喜欢绿色，因为 green=Good luck every day. 意思是：每天都好运",
    "喜欢紫色，因为 purple=Please understand me. 意思是：请理解我",
    "喜欢黑色，因为 black=Be kind to me. 意思是：对我温柔一点",
    "喜欢白色，因为 white=We are together forever. 意思是：我们永远在一起",
    "喜欢粉色，因为 pink=Please kiss me. 意思是：请亲我一下",
    "喜欢橙色，因为 orange=Only you are my love. 意思是：只有你是我的爱",
    "喜欢灰色，因为 gray=Goodbye, my love. 意思是：再见，我的爱",
    "喜欢棕色，因为 brown=Be nice to me. 意思是：对我好一点",
    "喜欢青色，因为 cyan=Can you love me? 意思是：你能爱我吗？",
    "喜欢银色，因为 silver=Sorry, I love you. 意思是：对不起，我爱你",
    "喜欢金色，因为 gold=Good luck, my love. 意思是：祝你好运，我的爱",
    "喜欢彩色，因为 rainbow=Really I love you. 意思是：真的，我爱你",
    "喜欢透明，因为 transparent=Thank you, my love. 意思是：谢谢你，我的爱",
    "喜欢黑白，因为 black and white=Be nice to me. 意思是：对我好一点"
];


let inbigcountboxid = document.getElementById("inbigcountboxid");
singinformation.map(function (value, index, array) {
    inbigcountboxid.insertAdjacentHTML("beforeend", `<div class="inbox w-full h-screen  flex items-center justify-between">
            <div class="w-full h-full absolute z-10 flex items-center justify-center overflow-hidden">
                <img class="bigimg scale-[4] blur-sm 2xl:scale-[4] xl:scale-[4] lg:scale-[6] sm:scale-[10]"
                     src="${value.img}">
            </div>

            <div class="w-1/2 h-full inline float-left 2xl:inline xl:inline lg:inline md:hidden sm:hidden">
                <div class="w-full h-full flex items-center justify-center overflow-hidden ">
                    <div id="boximg" class="boximg w-1/2 h-1/2 relative z-20 flex items-center justify-center overflow-hidden">
                        <img class="inimg w-full"  src="${value.img}">
                    </div>
                </div>
            </div>

            <div class="w-1/2 h-full inline float-left relative z-30 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                <div class="w-full h-full overflow-hidden">
                    <div class="w-full h-2/6 relative z-20 flex items-end justify-center overflow-hidden">
                        <span class="selectittle text-5xl text-gray-50">${value.title}</span>
                    </div>

                    <div class="w-full h-20  z-20 overflow-hidden  flex items-center justify-center">
                        <div class="w-5/6 h-full  indent-8 tracking-widest text-2xl flex items-center justify-center text-gray-50 leading-10    ">
                            <span id="singger">${value.singer}</span>
                        </div>
                    </div>

                    <div class="w-full h-2/6 z-20 overflow-hidden  flex  justify-center">
                        <div class="w-5/6 h-full  indent-8 tracking-widest text-2xl flex justify-center text-gray-50 leading-10    ">
                            <span>
                                ${value.text}
                            </span>
                        </div>
                    </div>


                    <div class="w-full h-1/6 overflow-hidden">
                        <div class="w-full h-1/6  flex justify-center items-center">
                            <div id="musicbutton"
                                 class="w-1/12 text-lg h-full flex justify-center items-center text-gray-50  float-left rounded-full">
                                <span style="cursor: pointer" class="musictext">播放</span>
                            </div>

                            <div id="musicrest"
                                 class="w-1/12 text-lg h-full flex justify-center items-center text-gray-50  float-left rounded-full">
                                <span style="cursor: pointer" class="musicresttext">重放</span>
                            </div>
                        </div>

                        <div class="w-full h-2/6   items-center">
                            <div id="startbutton"
                                 class="w-1/12 text-xl h-1/2 flex items-center text-gray-50  float-left">
                                <span class="startmusictime">00:00</span>
                            </div>

                            <div id="lasttbutton"
                                 class="w-1/12 text-xl h-1/2 flex items-center text-gray-50 bg float-right">
                                <span class="lastmusictime"></span>
                            </div>
                        </div>

                        <div class="w-full h-2/6 items-center">
                            <div
                                 class="centermusic bg-gray-600 opacity-50 w-full bg-gray-50 text-xl h-1/2 flex items-center text-gray-50 float-left rounded-full">
                            </div>
                        </div>
                    </div>
                    <audio loop class="music"">
                        <source src="${value.audio}">
                    </audio>
                </div>
            </div>
        </div>
`);
});

let selectinput = document.getElementById("selectinput");
let selectittle = [...document.querySelectorAll(".selectittle")];
let selectselectbox = document.getElementById("selectselectbox");
let selectonbox = document.getElementById("selectonbox");
let selectbox = document.getElementById("selectbox");
let selectonbox2 = document.getElementById("selectonbox2");
setInterval(function () {
selectittle.map(function (value, index, array) {
    let text = value.innerText;
    selectinput.addEventListener("focus", function () {
        selectonbox2.style.display = "block";
        //当用户在搜索框输入内容时，显示搜索结果
        selectinput.addEventListener("input", function () {
            let inputtext = selectinput.value;
            //如果输入框的匹配一个字符，就显示搜索结果
        
            // if (text.includes(inputtext)) {
            //     selectonbox2.style.display = "block";
            //     selectonbox2.innerText = `${inputtext}`;
            // } else {
            //  
            // }
        }
        );
        
    });

    selectinput.addEventListener("blur", function () {
        selectonbox2.style.display = "none";
    });
});
}, 1000);
let currentIndex = 0;
let timeshiqi;
let deltoal = 0;
let hellouser = document.getElementById("hellouser");
let saohuatext = document.getElementById("saohuatext");

let random = parseInt(Math.random() * 17);
saohuatext.innerText = saohua[random];


let search = location.search;
let search1 = decodeURI(search);
let search2 = decodeURI(search).slice(1);


if (search2 === "") {
    //回到主页
    alert("你是不是忘记了什么？");
    location.href = "../page/login.html";
}


//获取时间并且分为早上，中午，晚上
let time = new Date();
let hour = time.getHours();
if (hour >= 6 && hour < 10) {
    hellouser.innerHTML = "早上好！" + search2;
} else if (hour >= 11 && hour < 14) {
    hellouser.innerHTML = "中午好！" + search2;
} else if (hour >= 15 && hour < 18) {
    hellouser.innerHTML = "下午好！" + search2;
} else {
    hellouser.innerHTML = "晚上好！" + search2;
}


let startmusictime = document.querySelectorAll(".startmusictime");
let lastmusictime = document.querySelectorAll(".lastmusictime");
let centermusic = document.querySelectorAll(".centermusic");
let music = document.querySelectorAll(".music");
let musictext = document.querySelectorAll(".musictext");
let musicresttext = document.querySelectorAll(".musicresttext");
let boximg = document.querySelectorAll(".boximg");
music.forEach((value, index) => {
    //获取音乐的总时间
    value.addEventListener("loadedmetadata", function () {
            let musicalltime = value.duration;
            let musicalltime1 = parseInt(musicalltime / 60);
            let musicalltime2 = parseInt(musicalltime % 60);
            lastmusictime[index].innerText = `${musicalltime1}:${musicalltime2}`;
        }
    );
});

//获取音乐的当前时间
music.forEach((value, index) => {
        value.addEventListener("timeupdate", function () {
            let musictime = value.currentTime;
            let musictime1 = parseInt(musictime / 60);
            let musictime2 = parseInt(musictime % 60);
            startmusictime[index].innerText = `${musictime1}:${musictime2}`;
            centermusic[index].style.width = `${musictime / value.duration * 100}%`;
        });
    }
);


musictext.forEach((value, index) => {
    value.addEventListener("click", function () {
            if (music[index].paused) {
                music[index].play();
                value.innerText = "暂停";
                boximg[index].style.transform = "scale(1.1)";

            } else {
                music[index].pause();
                value.innerText = "播放";
                boximg[index].style.transform = "scale(1)";

            }
        }
    );
});


//重放
musicresttext.forEach((value, index) => {
        value.addEventListener("click", function () {
            music[index].currentTime = 0;
            music[index].play();
        });
    }
);


let inbigcountbox = document.querySelector(".inbigcountbox");
window.addEventListener("wheel", function (evt) {
    deltoal += evt.deltaY;
    clearTimeout(timeshiqi);
    if (deltoal > 1000 || deltoal < -1000) {
        //音乐暂停
        music.forEach((value, index) => {
                value.pause();
                musictext[index].innerText = "播放";
            }
        );
        timeshiqi = setTimeout(() => {
            if (evt.deltaY > 0) {
                if (!(currentIndex === inbigcountbox.childElementCount - 1)) {
                    currentIndex++;
                }

            } else {
                if (currentIndex !== 0) {
                    currentIndex--;
                }
            }
            inbigcountbox.style.transform = `translateY(-${currentIndex * 100}vh)`;
            deltoal = 0;
        }, 20);
    }
});


let userpage = document.getElementById("userpage");
userpage.onclick = function () {
    window.location.href = `../../wzy/root-user.html?${search2}`;
};

