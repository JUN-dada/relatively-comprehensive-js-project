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

            window.location.href = "../content/page1.html?" + usernamereg.value;
        }, 1000);
    }
};




