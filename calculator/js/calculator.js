const screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == 'x') {
            btntext = '*';
        }

        if (btntext == '%') {
            btntext = '/';
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

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

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

function sin()
{
    display.innerHTML=Math.sin(display.innerText);
}
function cos()
{
    display.innerHTML=Math.cos(display.innerText);
}
function tan()
{
    display.innerHTML=Math.tan(display.innerText);
}


const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}
