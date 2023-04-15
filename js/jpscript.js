var checkFlag = 0 ;
var checkFlag = 0 ;
var score = 0;
var count = 0;
var num = 46;
var num_offset = 0;
var mode_string = "Hiragana mode";

var flag_hir = 1;  
var flag_kat = 0;  
var flag_oth = 0;  
var flag_ath = 0;  
var flag_chm = 0;

var inputValue = "";

//let txt = '{"japan": [{"char": "あ","sp": "a"},{"char": "abc","sp": "i"}],"korean": [{"char": "aaa","sp": "bbb"}]}'
var randomNum = randomMake();


hiraganaArray= obj.hiragana;
katakanaArray= obj.katakana;
otherArray= obj.hiragana;
arrayMain = obj.hiragana.concat(obj.katakana, obj.other);

document.getElementById('demo').innerHTML = arrayMain[randomNum].char;
document.getElementById('mode').innerHTML = "Hiragana mode";
document.getElementById('mode').style.color = 'coral';


function hiraganamode(){
    num = 46;
    num_offset = 0;
    randomNum = randomMake();
    arrayMain = obj.hiragana;
    document.getElementById('mode').innerHTML = "Hiragana mode";
    document.getElementById('mode').style.color = 'coral';
    flag_hir = !flag_hir;
}

function katakanamode(){
    num = 46;
    num_offset = 0;
    randomNum = randomMake();
    arrayMain = obj.katakana;
    document.getElementById('mode').innerHTML = "Katakana mode";
    document.getElementById('mode').style.color = 'blue';
    flag_kat = !flag_kat;
}

function othermode(){
    num = 50;
    num_offset = 0;
    randomNum = randomMake();
    arrayMain = obj.other;
    document.getElementById('mode').innerHTML = "Other mode";
    document.getElementById('mode').style.color = 'red';
    flag_oth = !flag_oth;
}

function allmode(){
    num = 142;
    num_offset = 0;
    randomNum = randomMake();
    arrayMain = obj.hiragana.concat(obj.katakana, obj.other);
    document.getElementById('mode').innerHTML = "All mode";
    document.getElementById('mode').style.color = 'black';
    flag_ath = !flag_ath;
}

function randomMake(){
    return (Math.floor(Math.random()*num)+ num_offset);
}

function checkValue(){
    //var input = document.getElementById("answer");
    input.addEventListener("keypress", function(event) {
    if (event.key === "Enter" || event.key === " ") {
     event.preventDefault();
     inputValue = input.value;
     if (inputputValue.toLowerCase() == arrayMain[randomNum].sp){
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
