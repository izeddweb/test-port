//   set variable

let items = document.querySelectorAll('.item')







//  set function
items.forEach( function(ele) {
   
    ele.onclick= function () {
        items.forEach(function(ele) {
            ele.classList.remove('active')
        })
        ele.classList.add('active')
    }
})
