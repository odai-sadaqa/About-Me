/* eslint-disable indent */
/* eslint-disable no-unused-vars */
'use strict';
let userName = prompt('what is your name ?');

while (!userName) {
  userName = prompt('please enter your name : ');
}

let welcome = alert('hello  ' + userName + ' lets play a gussing game');
let score = 0;
question1();
question2();
question3();
question4();
question5();
question6();
question7();

function question1(){
  let qus1 = prompt('Do you think i\'m a programmer ?');
  qus1 = qus1.toLowerCase();


  if (qus1 === 'yes' || qus1 === 'y') {
    alert('great, you are a correct');
    //console.log('great, you are a correct');
    score++;
  }
  else if (qus1 === 'no' || qus1 === 'n') {
    alert('ooops, sorry this is incorrect');
    //console.log ('ooops, sorry this is incorrect');
  }
  else {
    alert('please enter (yes or no)');
    //console.log (' please enter (yes or no) incorrect');
  }
}

function question2(){
    let qus2 = prompt('Do you think i love video game ?');
qus2 = qus2.toLowerCase();


if (qus2 === 'yes' || qus2 === 'y') {
  alert('great, you are a correct');
  //console.log('great, you are a correct');
  score++;
}
else if (qus2 === 'no' || qus2 === 'n') {
  alert('ooops, sorry this is incorrect');
  //console.log ('ooops, sorry this is incorrect');
}
else {
  alert('please enter (yes or no)');
  //console.log (' please enter (yes or no) incorrect');
}
}


function question3(){
    let qus3 = prompt('Do you think i love a socer ?');
qus3 = qus3.toLowerCase();

if (qus3 === 'yes' || qus3 === 'y') {
  alert('great, you are a correct');
  //console.log('great, you are a correct');
  score++;
}
else if (qus3 === 'no' || qus3 === 'n') {
  alert('ooops, sorry this is incorrect');
  //console.log ('ooops, sorry this is incorrect');
}
else {
  alert('please enter (yes or no)');
  //console.log (' please enter (yes or no) incorrect');
}
}

function question4(){
    let qus4 = prompt('Do you think i love to traviling ?');
qus4 = qus4.toLowerCase();


if (qus4 === 'yes' || qus4 === 'y') {
  alert('great, you are a correct');
  //console.log('great, you are a correct');
  score++;
}
else if (qus4 === 'no' || qus4 === 'n') {
  alert('ooops, sorry this is incorrect');
  //console.log ('ooops, sorry this is incorrect');
}
else {
  alert('please enter (yes or no)');
  //console.log (' please enter (yes or no) incorrect');
}
}

function question5(){
    let qus5 = prompt('Do you think i love a car ?');
qus5 = qus5.toLowerCase();
if (qus5 === 'yes' || qus5 === 'y') {
  alert('ooops, sorry this is incorrect');
  //console.log('ooops, sorry this is incorrect' );
}
else if (qus5 === 'no' || qus5 === 'n') {
  alert('great, you are a correct');
  //console.log ('great, you are a correct');
  score++;
}
else {
  alert('please enter (yes or no)');
  //console.log (' please enter (yes or no) incorrect');
}
}

function question6(){
    for (let gussCount = 1; gussCount <= 4; gussCount++) {

        let qus6 = prompt(' Guss a number between 1 and 50');
        let guss = 30;
      
        if (qus6 == guss) {
          alert('you are cleaver it is right answer');
          // console.log("you are cleaver it is right answer");
          score++;
          break;
      
        }
        else if (qus6 > guss) {
          alert('it is incorrect it high');
          // console.log("it is incorrect it high");
        }
        else if (qus6 < guss) {
          alert('incorrect ,it is low number ');
          // console.log("incorrect ,it is low number");
        }
        else {
          alert('sorry you are faild');
        }
      }
}

function question7(){
    let qus7 = '';
let bestClub = ['RealMadrid', 'Barcelona', 'Mancity', 'BayrnMunch', 'parisSanGerman', 'Liverpol'];
// //console.log(bestClub.length);
let flag= false;
// bestClub = bestClub.toLowerCase();
for (let j = 0; j < 6; j++) {
  qus7 = prompt('which the best club in the world?');

}
for (let i = 0; i < bestClub.length; i++) {
  let j = bestClub[0];
  for (j = 0; j < 6; j++) {
    console.log(bestClub[1]);
  }
  if (bestClub[i] === qus7) {
    alert('you good');
    flag =true;

  }
  if (flag===true){
    break;
  }
}
}


alert('the answer must be one of them RealMadrid Barcelona, Mancity, BayrnMunch, parisSanGerma, Liverpol');
alert(`you have a score of ${score} /7`);
alert('thank you for playing ' + userName);
