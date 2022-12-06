getEle(".search input").addEventListener("keyup", function () {
  let str = "";
  let time = null;
  time !== null ? clearTimeout(time) : null;
  time = setTimeout(() => {
    data[1].map((item, index) => {
      if (this.value.trim() && item.title.includes(this.value.trim())) {
        str += `<li>标题:${item.title}  歌手:${item.text}</li>`;
        getEle(".onehtml")[index].style.outline =
          " 3px solid rgba(0, 0, 0, 0.516)";
      }
    });
    getEle(".hide").style.display = "block";
    getEle(".ul").innerHTML = str;
  }, 500);
});
getEle(".search input").addEventListener("blur", () => {
  getEle(".hide").style.display = "none";
  getEle(".search input").value = "";
  for (let i = 0; i < getEle(".onehtml").length; i++) {
    getEle(".onehtml")[i].style.outline = "none";
  }
});
