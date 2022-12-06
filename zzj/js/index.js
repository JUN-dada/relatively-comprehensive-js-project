console.log(navigator.userAgent);
let inbigcountbox = document.querySelector(".inbigcountbox");
let deltoal = 0;
let timeshiqi;
let currentIndex = 0;
window.addEventListener("wheel", function (evt) {
    deltoal += evt.deltaY;
    clearTimeout(timeshiqi);
    if (deltoal > 1000 || deltoal < -1000) {
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
            inbigcountbox.style.transform = `translateX(-${currentIndex * 100}vw)`;
            deltoal = 0;
        }, 20);
    }
});


let sepiclaudio = document.getElementById("sepiclaudio");
let listen = document.getElementById("listen");
let inbox2 = document.getElementById("inbox2");
let spacelbox1 = document.getElementById("spacelbox1");
let spacelbox2 = document.getElementById("spacelbox2");
let spacelbox1text = document.getElementById("spacelbox1text");
let spacelboxother = document.getElementById("spacelboxother");
spacelboxother.style.display = "none";
listen.addEventListener("click", function () {
        spacelbox1.className = "w-1/2 h-screen bg-blue-400 flex items-center justify-center float-left";
        setTimeout(() => {
            spacelbox1.className = "w-full h-screen bg-blue-400 flex items-center justify-center float-left";
            setTimeout(() => {
                spacelbox1text.style.display = "none";
            }, 2000);
        }, 2000);

        setTimeout(() => {
            jianbian();
        }, 100);

        setTimeout(() => {

            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    spacelboxother.style.opacity = `${i / 100}`;
                    spacelboxother.style.display = "block";
                }, i * 20);
            }
        }, 1000);
    }
);

function jianbian() {
    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                spacelbox1.style.opacity = `${1 - i / 100}`;
            }, i * 20);
        }
    }, 4000);
}


let startmusictime = document.getElementById("startmusictime");
let lastmusictime = document.getElementById("lastmusictime");
let musicbutton = document.getElementById("musicbutton");
let centermusic = document.getElementById("centermusic");
let musicrest = document.getElementById("musicrest");
let music = document.getElementById("music");
let musictext = document.getElementById("musictext");
let musicresttext = document.getElementById("musicresttext");
let boximg = document.getElementById("boximg");
console.log(music.duration);
//获取音乐总时间
music.addEventListener("loadedmetadata", function () {
    let musictime = music.duration;
    let musictime1 = Math.floor(musictime / 60);
    let musictime2 = Math.floor(musictime % 60);
    lastmusictime.innerText = `${musictime1}:${musictime2}`;
});

//音乐播放
musicbutton.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musictext.innerText = "暂停";
    } else {
        music.pause();
        musictext.innerText = "播放";
    }
});
//获取当前播放时间
music.addEventListener("timeupdate", function () {
        let musictime = music.currentTime;
        let musictime1 = Math.floor(musictime / 60);
        let musictime2 = Math.floor(musictime % 60);
        startmusictime.innerText = `${musictime1}:${musictime2}`;
        let musicwidth = (musictime / music.duration) * 100;
        centermusic.style.width = `${musicwidth}%`;
    }
);

//音乐重播
musicresttext.onclick = function () {
    music.currentTime = 0;
    music.play();
    musictext.innerText = "暂停";
};


let usernamereg = document.getElementById("usernamereg");
let passwordreg = document.getElementById("passwordreg");
let passwordregagain = document.getElementById("passwordregagain");
let emailreg = document.getElementById("emailreg");
let regbtn = document.getElementById("regbtn");
let gettext = document.getElementById("gettext");

let usernamestandard = /^[a-zA-Z]\w{4,15}$/;
let passwordstandard = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
let emailstandard = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

regbtn.onclick = function () {
    if (!usernamestandard.test(usernamereg.value)) {
        gettext.innerText = "用户名不符合规范";
        setTimeout(function () {
            gettext.innerText = "听歌，找歌，一气呵成。";
        }, 2000);
    } else if (!passwordstandard.test(passwordreg.value)) {
        gettext.innerText = "密码不符合规范";
        setTimeout(function () {
            gettext.innerText = "听歌，找歌，一气呵成。";
        }, 2000);
    } else if (passwordreg.value !== passwordregagain.value) {
        gettext.innerText = "两次密码不一致";
        setTimeout(function () {
            gettext.innerText = "听歌，找歌，一气呵成。";
        }, 2000);
    } else if (!emailstandard.test(emailreg.value)) {
        gettext.innerText = "邮箱不符合规范";
        setTimeout(function () {
            gettext.innerText = "听歌，找歌，一气呵成。";
        }, 2000);
    } else {
        alert("注册成功");
        setTimeout(function () {

            let userlist = localStorage.getItem("userlist") ? JSON.parse(localStorage.getItem("userlist")) : [];
            userlist.push({
                username: usernamereg.value,
                password: passwordreg.value,
                email: emailreg.value
            });
            localStorage.setItem("userlist", JSON.stringify(userlist));

            window.location.href = "content/page1.html?" + usernamereg.value;
        }, 1000);
    }
};




