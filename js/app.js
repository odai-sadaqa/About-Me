'use strict';
let userName = prompt ("what is your name ?");
let welcome  = alert ('hello  ' + userName + " lets play a gussing game");


let qus1 = prompt ("Do you think i'm a programmer ?");
qus1 =qus1.toLowerCase();


if (qus1==='yes' || qus1==='y'){
    alert ('great, you are a correct');
    //console.log('great, you are a correct');
}
else if (qus1==='no' || qus1==='n'){
    alert('ooops, sorry this is incorrect');
    //console.log ('ooops, sorry this is incorrect');
}
else {
     alert ('please enter (yes or no)');
     //console.log (' please enter (yes or no) incorrect');
}

let qus2 = prompt ("Do you think i love video game ?");
qus2 =qus2.toLowerCase();


if (qus2==='yes' || qus2==='y'){
    alert ('great, you are a correct');
    //console.log('great, you are a correct');
}
else if (qus2==='no' || qus2==='n'){
    alert('ooops, sorry this is incorrect');
    //console.log ('ooops, sorry this is incorrect');
}
else {
     alert ('please enter (yes or no)');
     //console.log (' please enter (yes or no) incorrect');
}


let qus3 = prompt ("Do you think i love a socer ?");
qus3 =qus3.toLowerCase();


if (qus3==='yes' || qus3==='y'){
    alert ('great, you are a correct');
    //console.log('great, you are a correct');
}
else if (qus3==='no' || qus3==='n'){
    alert('ooops, sorry this is incorrect');
    //console.log ('ooops, sorry this is incorrect');
}
else {
     alert ('please enter (yes or no)');
     //console.log (' please enter (yes or no) incorrect');
}

let qus4 = prompt ("Do you think i love to traviling ?");
qus4 =qus4.toLowerCase();


if (qus4==='yes' || qus4==='y'){
    alert ('great, you are a correct');
    //console.log('great, you are a correct');
}
else if (qus4==='no' || qus4==='n'){
    alert('ooops, sorry this is incorrect');
    //console.log ('ooops, sorry this is incorrect');
}
else {
     alert ('please enter (yes or no)');
     //console.log (' please enter (yes or no) incorrect');
}
let qus5 = prompt ("Do you think i love a car ?");
qus5 =qus5.toLowerCase();


if (qus5==='yes' || qus5==='y'){
    alert ('ooops, sorry this is incorrect');
    //console.log('ooops, sorry this is incorrect' );
}
else if (qus5==='no' || qus5==='n'){
    alert('great, you are a correct');
    //console.log ('great, you are a correct');
}
else {
     alert ('please enter (yes or no)');
     //console.log (' please enter (yes or no) incorrect');
}

alert('thank you for playing ' + userName);