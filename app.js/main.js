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
let btnSwitchMode = document.querySelector(".switch-mode div button");
let classeBtn = btnSwitchMode.classList.value;
let classeContentBtn = contentMode.classList.value;
console.log(classeContentBtn);

//  2 way

btnSwitchMode.onclick = function() {
  if(classeContentBtn === 'moon-mode-content-btn') {
    contentMode.classList.replace('moon-mode-content-btn','sun-mode-content-btn');
    btnSwitchMode.onclick = function() {
      if(classeContentBtn === 'moon-mode-content-btn') {
        contentMode.classList.replace('sun-mode-content-btn','moon-mode-content-btn')
      }
    }
  }
}
  

// btnSwitchMode.onclick = function() {
//   if (classeContentBtn === 'moon-mode-content-btn') {
//     contentMode.classList.replace('moon-mode-content-btn','sun-mode-content-btn')
//   }else {
//     contentMode.classList.replace('sun-mode-content-btn','moon-mode-content-btn')

//   }

  
// }






 // 1 way
// btnSwitchMode.onclick = function () {
//     btnSwitchMode.classList.toggle('sun-mode-btn')
//     contentMode.classList.toggle('sun-mode-content-btn')
//   };
  