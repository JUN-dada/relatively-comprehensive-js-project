// 遍历生成
addEventListener("DOMContentLoaded", () => {
  Elet();
});
function Elet() {
  let idx = null;
  let arr = null;
  arr = [
    ` <div class="con">
    <div class="img">
      <p>
        <img id="imgx" src="./image/img1.jpg" />
      </p>
      <p><span id="span1">阿巴阿巴</span></p>
      <p>
        <input type="button" value="随机切换" onclick="change()" />
      </p>
    </div>
    <div class="se">
      <div class="se1">
        <span
          ><span>性别:</span> <input class="we" type="text"
        /></span>
        <span><span>年龄：</span> <input type="text" /></span>
        <span><spanp>个性：</spanp> <input type="text" /></span>
      </div>
      <div>
        <span><span>邮箱：</span> <input type="text" /></span>
        <span><span>英文名：</span> <input type="text" /></span>
        <span><span>学历：</span> <input type="text" /></span>
      </div>
    </div>
    <div class="cun">编辑</div>
  </div>
`,
    `<a hear="../html/music.html">
    <div class="onehtml">
    <div><img src="../image/body.png" alt=""></div>
    <div class="cont1">
      <div class="text"><span>内容：</span><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum consequatur voluptate vero animi dolores ex temporibus unde magnam suscipit vitae! Adipisci temporibus ducimus laboriosam quia rem nisi sunt impedit aperiam?</span></div>
      <div class="text"><span>内容：</span><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum consequatur voluptate vero animi dolores ex temporibus unde magnam suscipit vitae! Adipisci temporibus ducimus laboriosam quia rem nisi sunt impedit aperiam?</span></div>
    </div>
    <div class="text1">
    <span></span><p></p>
    <span></span><p></p>
    <span></span><p></p>
    </div>
    <div class="del"><span></span></div>
    </div>`,
    ` <div class="onehtml">
        <div>
          <img src="./image/body.png" alt="" />
        </div>
        <div class="cont1">
          <span>用户名：</span>
          <span>密码：</span>
          <span>邮箱：</span>
        </div>
        <div class="text1">
          <span>专辑：</span>
          <p></p>
          <span>歌手：</span>
          <p></p>
          <span>时间：</span>
          <p></p>
        </div>
        <div class="text2">
          <span>是否Root:</span>
          <span>Root</span>
        </div>
        <div class="del"></div>
      </div>
   `,
    `<div class="container">
      <div class="main">
        <h1 class="reset">Reset</h1>
        <div class="content1">
          <p>4到16位(字母，数字，下划线，减号)</p>
          <div>
            <span>用户名:</span>
            <input
              type="text"
              class="name"
              placeholder="请输入用户名:"
            />
          </div>
          <p>
            请输入:至少1个大写字母，1个小写字母，1个数字，1个特殊字符
          </p>
          <div>
            <span>密码:</span
            ><input
              type="password"
              class="password1"
              placeholder="请输入密码:"
            />
          </div>
          <p></p>
          <div>
            <span>确认密码:</span
            ><input
              type="password"
              class="password2"
              placeholder="请再次输入密码:"
            />
          </div>
          <button class="button1">确定</button>
        </div>
      </div>
    </div>`,
  ];
  getEle(".bod>p").map((item, index) => {
    // 添加
    let time = null;
    if (index < data.length) {
    }
    item.addEventListener("click", function () {
      time !== null ? clearTimeout(time) : null;
      idx = index;
      getEle(
        ".ctent"
      ).innerHTML = `<img class="load" src="./image/loading.gif" alt="" />`;
      time = setTimeout(() => {
        data[index].map(() => {
          if (data[index].length < 2) {
            getEle(".ctent").innerHTML = arr[index];
            index === 1 ? del() : null;
            getEle(".con input") ? edit() : null;
          } else {
            getEle(".ctent").innerHTML = "";
            for (let i = 0; i < data[index].length; i++) {
              getEle(".ctent").innerHTML += `<div class="onehtml">
                <div><img src="${data[index][i].img}" alt=""></div>
                <div class="cont1">
                <a href=${data[index][i].html}>
                  <div class="text"><span>歌名:</span><span>${data[index][i].title}</span></div>
                  <div class="text"><span>歌手：</span><span>${data[index][i].singer}</span></div>
                  <div class="text"><span>内容：</span><span>${data[index][i].text}</span></div>
                </a>
                </div>
                <div class="text1">
                <div class="text"><span>排名:</span><span>${data[index][i].ranking}</span></div>
                <div class="text"><span>时间：</span><span>${data[index][i].time}</span></div>
                </div>
                <div class="del"><span></span></div>
                </div>`;
              index === 1 || index === 2 ? del() : null;
            }
          }
          if (index === 2) {
            getEle(".ctent").innerHTML = "";
            for (let i = 0; i < data[index].length; i++) {
              getEle(".ctent").innerHTML += `<div class="onehtml">
              <div>
                <img src="./image/body.png" alt="" />
              </div>
              <div class="cont1">
               <div><span>用户名：</span><span>${data[index][i].hao}</span></div> 
               <div><span>密码：</span><span>${data[index][i].pass}</span></div> 
               <div><span>邮箱：</span><span>${data[index][i].eval}</span></div>
              </div>
              <div class="text1">
              <div><span>专辑：</span><span>${data[index][i].pass}</span></div> 
              <div><span>时间：</span><span>${data[index][i].eval}</span></div>
              </div>
              <div class="text2">
              </div>
              <div class="del"></div>
            </div>`;
            }
            del();
          }
          if (index === 3) {
            getEle(".button1") ? log1() : null;
          }
        });
      }, 1000);
    });
  });
  let data1 = true;
  // 全部删除
  getEle(".fsection span").map((item, index) => {
    item.addEventListener("click", () => {
      if (index === 0 && getEle(".onehtml").length) {
        let ele = document.querySelectorAll(".onehtml");
        if (confirm("确定删除!")) {
          for (let i = 0; i < ele.length; i++) {
            if (data1) {
              ele[i].remove();
            }
          }
        }
        // 添加
      } else if (index === 1) {
        idx !== 0 && idx !== 3
          ? (getEle(".ctent").innerHTML += arr[idx])
          : null;
      }
      del();
    });
  });
  // 单个删除
  function del() {
    let del = [...document.querySelectorAll(".del")];
    del.map((item) => {
      item.addEventListener("click", function () {
        this.parentElement.remove();
      });
    });
  }
}
