const screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.btn');

var historyData = [];
var expressionData = "";
var resultData = "";
screen.onkeydown = function () {
  console.log(screen.value);
};

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == 'x') {
            btntext = '*';
        }

        if (btntext == '%') {
            btntext = '/';
        }

        if (btntext == 'radic') {
            btntext = '√';
        }

        screen.value += btntext;
    });
}

 function sin() {
        screen.value = Math.sin(screen.value);
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function tan() {
        screen.value = Math.tan(screen.value);
    }

    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }

    // function sqrt() {
    //     screen.value = Math.sqrt(screen.value, 2);
    // }

    function log() {
        screen.value = Math.log(screen.value);
    }

    function pi() {
        screen.value = 3.14159265359;
    }

    function e() {
        screen.value = 2.71828182846;
    }

    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        screen.value = f;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }

// buttons.forEach((item) => {
//     item.onclick = () => {
//         if (item.id == 'clear'){
//             display.innerText = '';
//         }else if (item.id == 'backspace') {
//             let string = display.innerText.toString();
//             display.innerText = string.substr(0, string.length - 1);
//         }else if(display.innerText !='' && item.id == 'equal'){
//             display.innerText = eval(display.innerText);
//         }else if (display.innerText == '' && item.id == 'equal') {
//             display.innerText = 'Empty!';
//             setTimeout(() => (display.innerText=''), 2000);
//         // }else if(item.id=sin){
//         //     display.innerText=Math.sin(display.innerText);
//         }
//         else {
//             display.innerText += item.id;
//         }
//     }
// })



const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}

let history = document.getElementById('history');
function calculation(value){
    para = document.createElement('p');
    data = value + " " + eval(value);
    para.innertext= data;
    history.appendChild(para);
    return eval(value)
}

function save(){
    expressionData = screen.value;
    //var newinput = oldinput + input;
    //expressionData = input;
    //screen.value = newinput;
    var result = eval(screen.value);
    resultData = result;
    historyData.push({ expression: expressionData, result: resultData });
    showLogdata();
    resultData = "";
    expressionData = "";
    screen.value = result;
}

function showLogdata() {
    var log = document.getElementById("history_log");
    var string = "";
    for (var key in historyData) {
      string +="<div class=\"card\">" +
        "" + 
        historyData[key]["expression"] +
        " = " +
        historyData[key]["result"] +
        "<br></div>";
    }
  
    log.innerHTML = string;
  }