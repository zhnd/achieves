! function () {
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code');
    let styleTag = document.querySelector('#styleTag');
    let n = 0;
    let id = setInterval(() => {
      n += 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0,n);
      container.scrollTop = container.scrollHeight;
      if (n >= code.length) {
        window.clearInterval(id);
        fn && fn.call();
      }
    }, 20);
  }
  let code =
    `
/*
* 首先准备一张皮
*/
.preview {
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background: #FFE600;
}

.preview-content {
width: 100%;
height: 165px;
position: relative;
}

/*
* 首先画个鼻子
*/
#nose {
position: absolute;
left: 50%;
top: 15px;
transform: translateX(-50%);

width: 22px;
height: 22px;

border-style: solid;
border-width: 12px 14px;
border-radius: 50%;
border-color: black transparent transparent;
}

/*
* 接着画两只👀
*/

.eye {
position: absolute;
left: 50%;
top: -8px;
transform: translateX(-50%);

width: 45px;
height: 45px;
border: 2px solid black;
border-radius: 50%;

background: #2e2e2e;
}

/*
* 然后添加眼球
*/

.eye::before {
position: absolute;

display: block;
width: 20px;
height: 20px;
left: 6px;
top: -1px;

content: '';
background: white;
border: 2px solid black;
border-radius: 50%;
}

/*
* 接着画皮卡丘的左眼
*/

#left-eye {
margin-left: -90px;
}

/*
* 接着画皮卡丘的右眼
*/

#right-eye {
margin-left: 90px;
}

/*
* 接下来画皮卡丘的脸
*/

.face {
position: absolute;
top: 80px;

width: 55px;
height: 55px;

background: #fc0d1c;
border: 2px solid black;
border-radius: 50%;
}

#left-face {
right: 50%;
margin-right: 90px;
}

#right-face {
left: 50%;
margin-left: 90px;
}

/*
* 还有嘴唇没画呢
*/

.upperLip {
position: absolute;
top: 45px;

height: 24px;
width: 80px;

background: #FFE600;
}

/*
* 左边嘴唇
*/

#left-upperLip {
right: 50%;

border: 2px solid black;
border-top: none;
border-right: none;
border-bottom-left-radius: 60px 30px;

transform: rotate(-20deg);
}

/*
* 右边嘴唇
*/

#right-upperLip {
left: 50%;

border: 2px solid black;
border-top: none;
border-left: none;
border-bottom-right-radius: 60px 30px;

transform: rotate(20deg);
}

/*
* 还有下嘴唇就完成了
*/

.lowerLip-conent {
position: absolute;
left: 50%;
bottom: 0;
transform: translate(-50%);

height: 110px;
width: 228px;

overflow: hidden;
}

.lowerLip {
position: absolute;
bottom: 0;

width: 228px;
height: 800px;
background: #990513;
border-bottom-left-radius: 118px 800px;
border-bottom-right-radius: 118px 800px;

overflow: hidden;
}

/* 给下嘴唇添加高光 */

.lowerLip::after {
position: absolute;
bottom: -30px;
left: 50%;
transform: translate(-50%);

width: 120px;
height: 120px;

border-radius: 50%;
background: #fc4a62;

content: '';
}

/*
* 好了，走吧，皮卡丘
*/
  `;
  writeCode('', code, );
}.call();
