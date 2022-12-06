let registertn = document.getElementById("registertn");
let username = document.getElementById("username");
let password = document.getElementById("password");

registertn.onclick = function () {
    //拿取本地存储的数据
    let userlist = localStorage.getItem("userlist") ? JSON.parse(localStorage.getItem("userlist")) : [];
    //遍历数组
    for (let i = 0; i < userlist.length; i++) {
        if (username.value === userlist[i].username && password.value === userlist[i].password) {
            alert("登录成功");
            setTimeout(function () {
                window.location.href = "../content/page1.html?" + username.value;
            }, 1000);
            return;
        } else {
            if (username.value !== userlist[i].username) {
                alert("用户名不存在");
                if (password.value !== userlist[i].password) {
                    alert("密码错误");
                }
                return;
            }
        }
    }
};
