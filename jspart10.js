// let btn = document.querySelector("button");
// console.dir(btn); 

// btn.onclick = function () {
//     console.log('Button clicked!');
//     alter ()
// }
//  for muitiple  buttons you can use:
// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     // btn.onclick  = sayhello;
//     // btn.onclick = sayname;s
//     // btn.addEventListener("click", sayhello);
//     // btn.addEventListener("click", sayname);
//     btn.addEventListener("dbclick", function () {
//         console.log("you double clicked me");
//     });
// }
// function sayhello() {
//     alert("Hello");
// }
//  function sayname() {
//     alert("apna college");
// }
// // btn.onclick  = sayhello;
 
// activity //

// let btn = document.querySelector("button");


// btn.addEventListener("click",function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated")
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     // let color = '(${red}, ${green}, ${blue})';
//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let p = document.querySelector('p');

// p.addEventListener("click",function () {
//     console.log("paragrah was clicked")
// });

// let box = document.querySelector( ".box" );
// box.addEventListener("mouseenter", function () {
//     console.log( "Mouse entered the box" );
// });

// this  is an example of a closure, where we can  access the outer function's variable inside the inner function //

// let btn = document.querySelector("button");

// btn.addEventListener("click",function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor="pink";
// });

// form events //

let form = document.querySelector("form");

form.addEventListener("submit",function(event) {
    event.preventDefault();
    alert("form submitted");
});

