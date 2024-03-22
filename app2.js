console.log("priya")
const favmovie = "avatar";
let guess = prompt("guess my favorite movie");
while((guess!=favmovie)&&(guess!="quit")){
    guess=prompt("wrong guess, please try again");
}

if(guess==favmovie){
    console.log("congrats!");
}else{
    console.log("you quit")
}


let i=1;
while(i<=5){
    if(i == 3){
        break;
    }
    console.log(i);
    i++;
}
console.log("we used break at 3");

console.log("while condition");
i = 1;
while(i<=5){
    console.log(i);
    i++;
}