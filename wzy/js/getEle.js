// 获取元素
function getEle(ele) {
  let el = [...document.querySelectorAll(ele)];
  if (el.length === 1) {
    return el[0];
  } else {
    return el;
  }
}
