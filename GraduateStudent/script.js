/**
 * 倒计时操作
 */
function countDown() {
    let now = +new Date();
    let sss = parseInt((times - now) / 1000);
    let d = parseInt(sss / 60 / 60 / 24);
    let h = parseInt(sss / 60 / 60) % 24;
    h = h < 10 ? '0' + h : h;
    let m = parseInt(sss / 60) % 60;
    m = m < 10 ? '0' + m : m;
    let s = sss % 60;
    s = s < 10 ? '0' + s : s;
    dateText.innerHTML = "距离23考研还有<span style='color:red'>" + d + "天" + h + "小时" + m + "分钟" + s + "秒</span>";
}

/**
 * 时间
 */
function setDate() {
    let myDate = new Date();
    let myStr = "";
    myStr += myDate.getFullYear() + "年";
    myStr += (myDate.getMonth() + 1) + "月";
    myStr += myDate.getDate() + "日 ";
    myStr += myDate.getHours() + "时";
    myStr += myDate.getMinutes() + "分";
    myStr += myDate.getSeconds() + "秒";
    let myDateText = document.getElementById('date');
    myDateText.innerText = myStr;
}