// set variable

let body = document.getElementsByTagName("body");
let ul = document.querySelector(".ul");
let btns = document.querySelectorAll("button");
let btn = document.querySelectorAll(".btn");
let box= document.querySelector(".box");
console.log(box);

// set function

btns.forEach(function (ele) {
    ele.addEventListener("click", () => {
        btns.forEach((ele) => {
            ele.classList.remove("active");
            ele.style.opacity=1;
        });
        ele.classList.add("active");
        ele.style.opacity=0;
  });
});
