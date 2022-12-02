window.onload = function () {
    window.onload = function () {
        // 删除上边距
        let myRemoveTopList = document.getElementsByClassName("remove");
        for (let i = 0; i < myRemoveTopList.length; i++) {
            myRemoveTopList[i].style.marginTop = "0px";
        }
        // 删除右边距
        let myRemoveRightList = document.getElementsByClassName("removeRight");
        for (let i = 0; i < myRemoveRightList.length; i++) {
            myRemoveRightList[i].style.marginRight = "0px";
        }

        // 删除右边框
        let myRemoveRightBoderList = document.getElementsByClassName("removeRightBorderLine");
        for (let i = 0; i < myRemoveRightBoderList.length; i++) {
            myRemoveRightBoderList[i].style.borderRight = "none";
        }
    }
}