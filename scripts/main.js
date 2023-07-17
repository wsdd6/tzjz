
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

//图片切换器
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/touxiang.jpg') {
        myImage.setAttribute('src', 'img/1.jpg');
    } else {
        myImage.setAttribute('src', 'img/touxiang.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}
myButton.onclick = function() {
    setUserName();
}


function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}




