"use strict"




window.onload = init;

const tempF = document.getElementById("tempF");
const convert = document.getElementById("ConBtn");


function init(){ 
    convert.onclick = onConBtnClicked;
}

function onConBtnClicked(){
    console.log("onConBtnClick");

    //get the values I know
    let num1 = Number(tempF.value);
    
    console.log(num1);

    //compute the values I don't know
    let answer = ( num1 - 32 ) * 5/9;

    console.log(answer);

    //display the result.
    answerField.value = answer;

}


