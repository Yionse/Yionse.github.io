let submitButton = document.getElementById('submit');
let text = document.getElementById('text');

submitButton.addEventListener('click', function() {
    if (text.value === '') {
        alert("请先输入文字再提交哦！");
    } else {
        //如果输入不为空，则开始创建结点
        //建好了information
        let myImgSrcMan = ['one.jpeg', 'two.jpeg', 'three.jpeg', 'five.jpeg', 'six.jpeg', 'three.jpeg', 'fifteen.jpeg'];
        let myImgSrcWoman = ['four.jpeg', 'seven.jpeg', 'eight.jpeg', 'night.jpeg', 'ten.jpeg', 'eleven.jpeg', 'thirteen.jpeg', 'fourteen.jpeg'];

        //建information
        let myNodeFather = document.createElement('div');
        myNodeFather.setAttribute('class', 'information');

        //建img
        let myImg = document.createElement('img');
        if (document.getElementById('man').checked) { //说明性别为男，则创建男孩子头像，否则创建女孩子头像
            let index = Math.floor(7 * Math.random());
            myImg.setAttribute('src', 'images/' + myImgSrcMan[index]);
            // console.log(myImg);
        } else {
            let index = Math.floor(8 * Math.random());
            myImg.setAttribute('src', 'images/' + myImgSrcWoman[index]);
            // console.log(myImg);
        }

        //建span
        let mySpan = document.createElement('span');
        mySpan.setAttribute('class', 'timer');
        //建span的文本结点
        let mySpanText = document.createTextNode(getDate());
        mySpan.appendChild(mySpanText);
        // console.log(mySpan);

        //建p
        let myP = document.createElement('p');
        myP.setAttribute('class', 'inforText');
        let myPText = document.createTextNode(text.value);
        myP.appendChild(myPText);
        // console.log(myP);

        //将三个结点放入到创建的父节点中
        myNodeFather.appendChild(myImg);
        myNodeFather.appendChild(mySpan);
        myNodeFather.appendChild(myP);

        // console.log(myNodeFather);

        let myBoxNode = document.getElementById('box');
        myBoxNode.appendChild(myNodeFather);
        // console.log(myBoxNode);
    }
});

function getDate() {
    let myDate = new Date();
    let myStr = "";
    myStr += myDate.getFullYear() + "年";
    myStr += (myDate.getMonth() + 1) + "月";
    myStr += myDate.getDate() + "日 ";
    myStr += myDate.getHours() + "时";
    myStr += myDate.getMinutes() + "分";
    myStr += myDate.getSeconds() + "秒";
    return myStr;
}