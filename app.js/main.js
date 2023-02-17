//   set variable

let items = document.querySelectorAll(".item");

//  set function
items.forEach(function (ele) {
  ele.onclick = function () {
    items.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});
// set switch mode
let contentMode = document.querySelector(".switch-mode div");
let btnSwitchMode = document.querySelector(".switch-mode div .btn");

//  1 way
btnSwitchMode.onclick = function () {
  btnSwitchMode.classList.toggle('sun-mode-btn')
  contentMode.classList.toggle('sun-mode-content-btn')
};

