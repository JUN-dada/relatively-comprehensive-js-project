function findIndex() {
    lrcData.forEach((ele, i) => {
        console.log(ele.time);
        time >= ele.time ? index = i : null;
    })
}