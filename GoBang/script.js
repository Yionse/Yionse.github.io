function renewGame() {
    location.reload(); //让页面重新加载，即起到重新开始的作用
}

function drawRect() {
    /**
     * 在body加载完以后，执行该函数
     * 该函数的作用为将棋盘画出来
     * */
    cnv = document.getElementById('canvas'); //首先获取到页面中的DOM元素
    cxt = cnv.getContext('2d'); //利用DOM元素得到2D对象，下面就可以进行操作了
    for (var i = 0; i <= 640; i += 40) { //利用for循环，将棋盘上的线画出
        cxt.beginPath(); //开始一个路径(横线)
        cxt.moveTo(0, i); //横线相关操作
        cxt.lineTo(640, i);
        cxt.closePath();
        cxt.stroke(); //画出
        cxt.beginPath(); //开始新路径(竖线)
        cxt.moveTo(i, 0);
        cxt.lineTo(i, 640);
        cxt.closePath();
        cxt.stroke(); //画出,至此横竖线都已完成
    }
}

function player(e) {
    /**
     * 该方法被触发时，游戏正式开始
     * */
    chessMusic.play();
    //获得鼠标的X，y坐标(棋盘中)，并且详细计算是在棋盘中的第几格，取整得到
    var x = parseInt((e.clientX - 450) / 40);
    var y = parseInt((e.clientY - 40) / 40);
    if (chessDate[x][y] !== 0) {
        //数组中的数字只有012三种可能，如果为非0的话，则说明该位置已经存在棋子了
        alert("你不能在这个位置下棋！");
        return;
    }
    if (isWhite) { //判断是否为白棋下
        isWhite = false; //如果是白棋下的话，则需要切换，下一步该黑棋下
        drawChess(1, x, y); //白棋的标志为1，所以要给画棋子函数一个参数，让它知道该画白棋还是黑棋，同时XY值也需要给
        cnv.style.cursor = 'url("cursorBlack.cur"), auto'; //让鼠标上的黑白棋实现切换
    } else {
        isWhite = true; //如果不是为白棋下，则下一步为白棋下
        drawChess(2, x, y); //黑棋的标志位2，同上
        cnv.style.cursor = 'url("cursorWhite.cur"), auto'; //让鼠标上的黑白棋实现切换
    }
}

function playComputer(e) {
    /**
     * 该方法被触发时，游戏正式开始(人机对战)
     * */
    chessMusic.play();
    //获得鼠标的X，y坐标(棋盘中)，并且详细计算是在棋盘中的第几格，取整得到
    var x = parseInt((e.clientX - 450) / 40);
    var y = parseInt((e.clientY - 40) / 40);
    if (chessDate[x][y] !== 0) {
        //数组中的数字只有012三种可能，如果为非0的话，则说明该位置已经存在棋子了
        alert("你不能在这个位置下棋！");
        return;
    }
    drawChess(2, x, y); //黑棋的标志位2，将黑棋画在棋盘中
    console.log(x, y);

    // 由于机器无需接收操作，所以在黑棋落子以后，直接计算出机器下一步落子何处即可
    var chessArray = []; //用于接收这个返回坐标的数组
    chessArray = getXY(x, y); //调用函数计算坐标
    drawChess(1, chessArray[0], chessArray[1]); //将刚才计算的坐标画出即可
}

function getXY(x, y) {
    /** 
     * xy是上一步黑棋下的坐标，于是要计算出机器下一步该下在那里，首先需要将该XY得到
     * 机器下的位置肯定是在黑棋周围，于是将黑棋周围的所有坐标都计算一遍即可
     * 如果发现一个位置存在黑棋，则按位置顺延
     * 最后将得到的坐标返回即可
     */
    var chessArray = [];
    //这里将可能的位置算为14个，每个位置逐个计算，直到找到位置为止
    if (chessDate[x - 1][y - 1] === 0) { //等于0说明该位置没有棋子在，所以可以落子于此，直接返回即可，后续皆是如此
        chessArray[0] = x - 1;
        chessArray[1] = y - 1;
        return chessArray; //将数组返回即可
    } else if (chessDate[x][y - 1] === 0) {
        chessArray[0] = x;
        chessArray[1] = y - 1;
        return chessArray;
    } else if (chessDate[x + 1][y - 1] === 0) {
        chessArray[0] = x + 1;
        chessArray[1] = y - 1;
        return chessArray;
    } else if (chessDate[x - 1][y] === 0) {
        chessArray[0] = x - 1;
        chessArray[1] = y;
        return chessArray;
    } else if (chessDate[x + 1][y] === 0) {
        chessArray[0] = x + 1;
        chessArray[1] = y;
        return chessArray;
    } else if (chessDate[x - 1][y + 1] === 0) {
        chessArray[0] = x - 1;
        chessArray[1] = y + 1;
        return chessArray;
    } else if (chessDate[x][y + 1] === 0) {
        chessArray[0] = x;
        chessArray[1] = y + 1;
        return chessArray;
    } else if (chessDate[x + 1][y + 1] === 0) {
        chessArray[0] = x + 1;
        chessArray[1] = y + 1;
        return chessArray;
    } else if (chessDate[x - 1][y - 2] === 0) {
        chessArray[0] = x - 1;
        chessArray[1] = y - 2;
        return chessArray;
    } else if (chessDate[x][y - 2] === 0) {
        chessArray[0] = x;
        chessArray[1] = y - 2;
        return chessArray;
    } else if (chessDate[x + 1][y - 2] === 0) {
        chessArray[0] = x + 1;
        chessArray[1] = y - 2;
        return chessArray;
    } else if (chessDate[x - 1][y + 2] === 0) {
        chessArray[0] = x - 1;
        chessArray[1] = y + 2;
        return chessArray;
    } else if (chessDate[x][y + 2] === 0) {
        chessArray[0] = x;
        chessArray[1] = y + 2;
        return chessArray;
    } else if (chessDate[x + 1][y + 2] === 0) {
        chessArray[0] = x + 1;
        chessArray[1] = y + 2;
        return chessArray;
    }
}

function drawChess(chess, x, y) {
    /**
     * 画棋子函数，即当鼠标在棋盘中点击一下时，则触发该方法，chess为棋子的类型，XY为该棋子在棋盘中的格子并非坐标值
     * */
    if (isWell === true) { //首先判断该棋局是否已经结束，如果结束就不再画了
        alert("已经结束了，如果需要重玩，请刷新！");
        return;
    }
    if (x >= 0 && x < 15 && y >= 0 && y < 15) { //首先检查XY的值，必须要检查XY的值查看是否合法才可以进行操作
        if (chess === 1) { //判断这步棋是否为白棋下的
            //将一开始定义好的白棋对象，画在棋盘中，这里的位置需要进行操作，由于XY是第几格，而用drawImage函数时
            //需要准确的坐标，所以要*40+20
            cxt.drawImage(img_w, x * 40 + 20, y * 40 + 20);
            chessDate[x][y] = 1; //画完后，将该位置的值改为1，说明这里已经有一颗白色棋子了
        } else {
            cxt.drawImage(img_b, x * 40 + 20, y * 40 + 20);
            chessDate[x][y] = 2; //同白棋
        }
        //每一次下完以后，就需要判断输赢，由于是判断当前正在下的这一方，所以直接将刚才的标志位穿给判断函数就可以
        judge(x, y, chess);
    }
}

function judge(x, y, chess) { //判断输赢方法
    /**
     * 由于五子棋一共有四种取胜方法，即横竖的五颗棋子，然后是从左至右慢慢向下，从左至右慢慢向上，一共四种
     * 判断的时候需要将四种方法都分别考虑进去，如果存在一种，则说明有一方胜出
     * 判断是否胜利的方法为检查是否存在5颗同色棋子
     * */
    var count1 = 0; //第一种取胜方法
    for (var i = x; i >= 0; i--) { //获取到该棋子的X坐标，然后慢慢的往左移，则这是在判断横
        if (chessDate[i][y] !== chess) { //判断这枚棋子附近的棋子是否为与该棋子同色，
            break; //不同色，则不需要继续判断下去，说明这个位置被对方堵住了
        }
        count1++; //如果同色的话，棋子数量+1，继续执行下去，直到break，或者for语句结束
    }
    for (var i = x + 1; i < 15; i++) {
        if (chessDate[i][y] !== chess) {
            break;
        }
        count1++;
    } //同上，只不过方向改变，为慢慢往右移，因为两边都需要考虑

    var count2 = 0; //第二种取胜办法
    for (var i = y; i >= 0; i--) { //获取到该棋子Y坐标，然后慢慢的往上移动
        if (chessDate[x][i] !== chess) { //检查是否同色
            break; //不同色，结束
        }
        count2++; //同色的话，+1，继续执行for语句，直到结束或遇到break
    }
    for (var i = y + 1; i < 15; i++) {
        if (chessDate[x][i] !== chess) {
            break;
        }
        count2++; //同上，方向相反
    }

    var count3 = 0; //第三种取胜方法，为斜着，具体为从左上角至右下角斜，分为两部分检查
    for (var i = x, j = y; i >= 0, j >= 0; i--, j--) { //这里由于是斜着的，所以XY都会有变化，且XY同步变小，说明是棋子的上半部分
        if (chessDate[i][j] !== chess) { //这里是从该位置往左上角查看棋子颜色
            break; //如果不同，结束
        }
        count3++; //相同，棋子数量+1，继续执行该语句
    }
    for (var i = x + 1, j = y + 1; i < 15, j < 15; i++, j++) { //同步增大，为下半部分
        if (chessDate[i][j] !== chess) {
            break;
        }
        count3++; //同上，方向改变，这里是从该位置往右下角方向查看棋子颜色
    }

    var count4 = 0; //第四种取胜方法，斜着，为从右上角到左下角
    for (var i = x, j = y; i >= 0, j < 15; i--, j++) { //X减小，Y增大，说明为该棋子下半部分
        if (chessDate[i][j] !== chess) { //判断颜色是否相同
            break; //不同结束
        }
        count4++; //相同棋子数量+1，for循环继续
    }
    for (var i = x + 1, j = y - 1; i < 15, j >= 0; i++, j--) {
        if (chessDate[i][j] !== chess) {
            break;
        }
        count4++; //同上，方向改变，这里为上半部分
    }

    //判断如果数出来的棋子数量有一种情况大于等于5则游戏胜利，这里5可以随意更改，如果大于等于6的话，则变为了6子棋
    if (count1 >= 5 || count2 >= 5 || count3 >= 5 || count4 >= 5) {
        if (chess === 1) { //判断棋子的颜色为黑色还是白色
            winMusic.play();
            setTimeout(function() { //在赢了以后，不要马上显示赢的画面，过半秒钟再显示
                whiteWin.style.display = 'block';
            }, 500);
        } else {
            winMusic.play();
            setTimeout(function() {
                blackWin.style.display = 'block';
            }, 500);
        }
        isWell = true; //最后停止
    }
}