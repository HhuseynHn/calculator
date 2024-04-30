/** @format */

let screen = document.querySelector(".screen-show");

let ac = document.querySelector(".ac");
let del = document.querySelector(".del");
let dvide = document.querySelector(".dvide");

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let dot = document.querySelector(".dot");

let multiple = document.querySelector(".multiple");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let equal = document.querySelector(".equal");

let button = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  dot,
  ac,
  del,
  dvide,
  multiple,
  minus,
  plus,
  equal,
];

function dvideFnc(a, b) {
  return a / b;
}

function multipleFnc(a, b) {
  return a * b;
}

function plusFnc(a, b) {
  return a + b;
}
function minusFnc(a, b) {
  return a - b;
}

let a = 0;
let b = 0;
let operator = "";
let result = 0;
button.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.innerHTML == "DEL") {
      screen.innerHTML = 0;
      a = 0;
      b = 0;
      operator = "";
    } else if (e.innerHTML == "AC") {
      if (screen.innerHTML.toString().length > 1) {
        screen.innerHTML = screen.innerHTML
          .toString()
          .substring(0, screen.innerHTML.toString().length - 1);
      } else {
        screen.innerHTML = 0;
      }
    } else if (
      e.innerHTML == "+" ||
      e.innerHTML == "-" ||
      e.innerHTML == "/" ||
      e.innerHTML == "*"
    ) {
      if (!operator) {
        a = Number(screen.innerHTML);
        screen.innerHTML = e.innerHTML;
        operator = e.innerHTML;
      } else {
        screen.innerHTML = e.innerHTML;
        operator = e.innerHTML;
      }
    } else if (e.innerHTML == "=") {
      b = Number(screen.innerHTML);

      if (operator == "+") {
        if (
          plusFnc(a, b).toString().length > 14 &&
          plusFnc(a, b) > 9999999999999
        ) {
          screen.innerHTML = `${plusFnc(a, b).toString().slice(0, 13)}-er`;
        } else {
          screen.innerHTML = plusFnc(a, b).toFixed(2);
        }
      } else if (operator == "-") {
        if (
          minusFnc(a, b).toString().length > 14 &&
          minusFnc(a, b) > 9999999999999
        ) {
          screen.innerHTML = `${minusFnc(a, b).toString().slice(0, 13)}-er`;
        } else {
          screen.innerHTML = minusFnc(a, b).toFixed(2);
        }
      } else if (operator == "/") {
        if (
          dvideFnc(a, b).toString().length > 14 &&
          dvideFnc(a, b) > 9999999999999
        ) {
          screen.innerHTML = `${dvideFnc(a, b).toString().slice(0, 13)}-er`;
        } else {
          screen.innerHTML = dvideFnc(a, b).toFixed(2);
        }
      } else if (operator == "*") {
        if (
          multipleFnc(a, b).toString().length > 14 &&
          multipleFnc(a, b) > 9999999999999
        ) {
          screen.innerHTML = `${multipleFnc(a, b).toString().slice(0, 13)}-er`;
        } else {
          screen.innerHTML = multipleFnc(a, b).toFixed(2);
        }
      }
    } else {
      if (screen.innerHTML == "*" || screen.innerHTML == "/") {
        if (screen.innerHTML.toString().length < 14) {
          screen.innerHTML = "";
          screen.innerHTML += Math.abs(Number(e.innerHTML));
        }
      } else {
        if (e.innerHTML == ".") {
          if (!screen.innerHTML.includes(".")) {
            if (screen.innerHTML.toString().length < 14) {
              screen.innerHTML += e.innerHTML;
            }
            return;
          }
          return;
        }
        if (screen.innerHTML.toString().length < 14) {
          screen.innerHTML += e.innerHTML;
          screen.innerHTML = Math.abs(Number(screen.innerHTML));
        }
      }
    }
  });
});

