// **map ()**

// let n = [1,2,3,4];

// let double = n.map((el) => {
//     return el*2;
//     return el*el;

// })

// **filter ()**
// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter( (num) => (num % 2 == 0));
// let odd = nums.filter( (num) => (num % 2 != 0));

// **every ()**
// **reduce()**

// let nums = [1,2,3,4];
// let finalval = nums.reduce((res,el) => {
//     console.log(res);
//     return res +el;
// });
// console.log(finalval);

// **max using reduce**

// let arr = [1,2,3,4,5];
// let max = -1;
// for(let i=0; i<arr.length;i++) {
//     if(arr[i]>max) {
//         max = arr[i];
//     }
// }
// console.log('Max value: '+max);

// let result = arr.reduce((accumulator,currentValue)=>{
//     return Math.max(accumulator, currentValue);
// },-Infinity);
// console.log('Using Reduce:'+result);

/* or */

// let arr = [1,2,3,4,5];
// let max = -1;
// for(let i=0; i<arr.length;i++) {
//     if(arr[i]>max) {
//         max = arr[i];
//     }
// }
// console.log(max);
/* or */

// let max = arr.reduce((max,el) => {
//     if (max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(max);

// let nums = [10,20,30,40];
// let ans = nums.every((el) => el%10 == 0);
// console.log(ans);



// function getMin(nums) {
//     let min = nums.reduce((min,el) => {
//         if (min < el) {
//             return min;
//         } else {
//             return el;
//         }
//     });
//     return min;
// }
// let nums = [10,20,5,4,3];

// console.log(min);

// function sum(a,b=3) {
//     return a+b;
// }

// const data = {
//     email : "madhapriya28@gmail.com",

//     password : "abcd",
// };
// const datacopy = {...data};

// function min(msg,...args) {
//     console.log(msg);
//     return args.reduce((min,el) => {
//         if (min>el) {
//             return el;
//         } else {
//             return min;
//         }
//     });
// }

// const student = {
//     name: "karan",
//     age: 14,
//     class:14,
//     subjects:["hindi","english",'math'],
//     username:"karan@123",
//     password: "abcd"
// };
// let { username :user, password:secret,city:place="mumbai"} = student;



/* DOM topics  */


// console.dir(document.querySelector("#description"));


//    practice Qs       //


let para1 = document.createElement( 'p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);

para1.classList.add("red");


let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
document.querySelector('body').append(h3);

h3.classList.add("blue");


let div = document.createElement('div');
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector('body').prepend(div);