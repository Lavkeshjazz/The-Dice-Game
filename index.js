function game(){
var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1+1);
var str1="/Media/"+n1+".png";
var n2=Math.random();
n2=n2*6;
n2=Math.floor(n2+1);
var str2="/Media/"+n2+".png";
var image1=document.querySelectorAll("img")[0]; //This implies that in whole html code where ever img tag is used select that
image1.setAttribute("src",str1);  //setAttribute means where ever src is used there place that string as it link
var image2=document.querySelectorAll("img")[1]; 
image2.setAttribute("src",str2);  
function popConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}
var audio2=new Audio('/Media/snare.mp3');
var audio1=new Audio('/Media/aww.mp3');
if(n1>n2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
    document.querySelector("h1").style.color="#ffb200";
    document.querySelector(".player1").innerHTML="Player 1😎";
    document.querySelector(".player2").innerHTML="Player 2👎";
    startConfetti();
    audio2.play();
}
if(n2>n1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
    document.querySelector("h1").style.color="#ffb200";
    document.querySelector(".player2").innerHTML="Player 2😎";
    document.querySelector(".player1").innerHTML="Player 1👎";
    startConfetti();
    audio2.play();
}
if(n1===n2){
    document.querySelector("h1").innerHTML="🚩Draw🚩";
    document.querySelector(".player2").innerHTML="Player 2👎";
    document.querySelector(".player1").innerHTML="Player 1👎";
    stopConfetti();
    audio1.play();
}
}
