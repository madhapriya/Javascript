// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener('click', function(event) {
//     console.log("div was clicked");
// });

// ul.addEventListener('click', function(event) {
//     event.stopPropagation(); // stops the click from bubbling up to the parent
//     console.log("ul was clicked");
// });

// for(li of lis) {
//     li.addEventListener('click', function(event) {
//         event.stopPropagation(); // stops the click from bubbling up to 
//         console.log("li was clicked");
//     });
// }

//**********************   */ 2nd video   *********************

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listitem = event.target.parentElement;
        console.log(listitem);
        listitem.remove();
        console.log("delete");
    } 
});


// let delBtns   = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }