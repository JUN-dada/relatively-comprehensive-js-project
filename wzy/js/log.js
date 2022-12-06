let d = 0;
for (let i = 0; i < 100; i++) {
  localStorage.getItem(i) ? (d = i) : null;
}

function log1() {
  getEle(".button1").addEventListener("click", () => {
    /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(
      getEle(".content1 input")[1].value
    )
      ? (getEle(".content1 p")[1].innerHTML = "格式符合")
      : (getEle(".content1 p")[1].innerHTML =
          "请输入:至少1个大写字母，1个小写字母，1个数字 ，1个特殊字符");
    /^[\w-]{4,16}$/.test(getEle(".content1 input")[0].value)
      ? (getEle(".content1 p")[0].innerHTML = "格式符合")
      : (getEle(".content1 p")[0].innerHTML =
          "4到16位(字母，数字，下划线，减号)");
    // 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    getEle(".content1 input")[1].value === getEle(".content1 input")[2].value
      ? (getEle(".content1 p")[2].innerHTML = "正确!密码相同!")
      : (getEle(".content1 p")[2].innerHTML = "密码不同!请重新输入");
    if (
      /^[\w-]{4,16}$/.test(getEle(".content1 input")[0].value) &&
      /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(
        getEle(".content1 input")[1].value
      ) &&
      getEle(".content1 input")[2].value === getEle(".content1 input")[1].value
    ) {
      let obj = {
        use: getEle(".content1 input")[0].value,
        pass: getEle(".content1 input")[1].value,
      };
      localStorage.setItem(d, JSON.stringify(obj));
      d++;
    }
  });
}

// if (!location.href.includes(location.search.split("?")[1])) {
//   alert("你是不是还没有登陆呀？？？");
//   location.href = "/zzj/page/login.html";
// }
