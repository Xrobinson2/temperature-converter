"use strict"




window.onload = init;

const tempC = document.getElementById("tempC");
const convert = document.getElementById("ConBtn");


function init(){ 
    convert.onclick = onConBtnClicked;
}

function onConBtnClicked(){
    console.log("onConBtnClick");

    //get the values I know
    let num1 = Number(tempC.value);
    
    console.log(num1);

    //compute the values I don't know
    let answer = ( num1 * 9/5 ) + 32;

    console.log(answer);

    //display the result.
    answerField.value = answer;

}

