var checkFlag = 0 ;
var checkFlag = 0 ;
var score = 0;
var count = 0;
var num_offset = 0;

var flag_hir = 1;  
var flag_kat = 0;  
var flag_oth = 0;  
var flag_ath = 0;  
var flag_chm = 0;

var inputValue = "";

//let txt = '{"japan": [{"char": "あ","sp": "a"},{"char": "abc","sp": "i"}],"korean": [{"char": "aaa","sp": "bbb"}]}'
var randomNum = randomMake();


var arrayMain= []; 
var oneArray= [];
var twoArray= [];
var threeArray= [];
var allArray = [];

if (pageMark === "jp"){
    arrayMain= obj.hiragana; 
    oneArray= obj.hiragana;
    twoArray= obj.katakana;
    threeArray= obj.other;
    allArray = obj.hiragana.concat(obj.katakana, obj.other);
    document.getElementById('mode').innerHTML = "Hiragana mode";
}
else if(pageMark === "kr"){
    arrayMain= obj.consonants; 
    oneArray= obj.consonants;
    twoArray= obj.vowels;
    threeArray= obj.ganada;
    allArray = obj.consonants.concat(obj.vowels, obj.ganada);
    document.getElementById('mode').innerHTML = "Consonants mode";
}
else{
    num = 19;
    arrayMain= []; 
    oneArray= [];
    twoArray= [];
    threeArray= [];
    allArray = [];
}

document.getElementById('demo').innerHTML = arrayMain[randomNum].char;
document.getElementById('mode').style.color = 'coral';

function oneMode(num, num_offest){
    this.num = num;
    this.num_offest = num_offest;
    randomNum = randomMake();
    arrayMain = oneArray;
    let modeString = pageMark == "jp" ? "Hiragana mode" : "Consonants mode";
    document.getElementById('mode').innerHTML = modeString;
    document.getElementById('mode').style.color = 'coral';
    flag_hir = !flag_hir;
}

function twoMode(num, num_offest){
    this.num = num;
    this.num_offest = num_offest;
    randomNum = randomMake();
    arrayMain = twoArray;
    let modeString = pageMark == "jp" ? "Katakana mode" : "Vowels mode";
    document.getElementById('mode').innerHTML = modeString;
    document.getElementById('mode').style.color = 'blue';
    flag_kat = !flag_kat;
}

function threeMode(num, num_offest){
    this.num = num;
    this.num_offest = num_offest;
    randomNum = randomMake();
    arrayMain = threeArray;
    let modeString = pageMark == "jp" ? "Other mode" : "Ganada mode";
    document.getElementById('mode').innerHTML = modeString;
    document.getElementById('mode').style.color = 'red';
    flag_oth = !flag_oth;
}

function allmode(num, num_offest){
    this.num = num;
    this.num_offest = num_offest;
    randomNum = randomMake();
    arrayMain = allArray;
    let modeString = pageMark == "jp" ? "All mode" : "All mode";
    document.getElementById('mode').innerHTML = modeString;
    document.getElementById('mode').style.color = 'black';
    flag_ath = !flag_ath;
}

function randomMake(){
    return (Math.floor(Math.random()*num)+num_offset);
}

function checkValue(){
    //var input = document.getElementById("answer");
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter" || event.key === " ") {
     event.preventDefault();
     inputValue = input.value;
     if (inputValue.toLowerCase() == arrayMain[randomNum].sp){
      checkFlag = 1;  
      document.getElementById('correction').innerHTML = 'Correct answer!!';
      document.getElementById('correction').style.color = 'green';
      //alert(checkFlag);
      randomNum = randomMake();
      document.getElementById('demo').innerHTML = arrayMain[randomNum].char;
      input.value = "";
      score += 1;
      count += 1;
      document.getElementById('score').innerHTML = score;
      document.getElementById('total').innerHTML = count;
      document.getElementById('rate').innerHTML = Math.floor((score/count)*100);
      document.getElementById('bar').value = Math.floor((score/count)*100);
     }
     else{
      checkFlag = 0;
      document.getElementById('correction').innerHTML = 'Wrong word! correct is ' + arrayMain[randomNum].sp;
      document.getElementById('correction').style.color = 'crimson';
      //alert(checkFlag);
      randomNum = randomMake();
      document.getElementById('demo').innerHTML = arrayMain[randomNum].char;
      input.value = "";
      count += 1;
      document.getElementById('total').innerHTML = count;
      document.getElementById('rate').innerHTML = Math.floor((score/count)*100);
      document.getElementById('bar').value = Math.floor((score/count)*100);
     }
     }
    });
}

function clearAll(){
    score = 0;
    count = 0;
    document.getElementById('score').innerHTML = 0;
    document.getElementById('total').innerHTML = 0;
    document.getElementById('rate').innerHTML = 0; 
    document.getElementById('bar').value = 0;
}

function changelanMode1(){
    document.getElementById('btn1').innerHTML = "Hiragana";
}

function changelanMode2(){
    document.getElementById('btn1').innerHTML = "Korean";
}

function timeUp() {
    document.getElementById("demo").innerHTML = "Score: " + score;
}