function edit() {
  getEle(".con input").map(function (item) {
    item.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "Enter":
          let newEl = document.createElement("p");
          newEl.innerHTML = this.value;
          this.parentElement.replaceChild(newEl, this);
          edit1();
          break;
      }
    });
  });
}
function edit1() {
  getEle(".cun").addEventListener("click", () => {
    if (getEle(".se p").length) {
      getEle(".se p").map((item) => {
        let newEl = document.createElement("input");
        newEl.value = item.innerText;
        item.parentElement.replaceChild(newEl, item);
        edit();
      });
    }
  });
}

edit();
