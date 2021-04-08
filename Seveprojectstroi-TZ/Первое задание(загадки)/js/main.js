var butStart = document.getElementsByClassName('but-start');
var openRiddle = document.getElementsByClassName('block-riddle');
var checkAnswer = document.getElementsByClassName('check-answer');
var inputAnswer = document.getElementsByClassName('input-answer')[0];
var numberAnswer = document.getElementsByClassName('block-riddle__title');
var num = parseInt(numberAnswer[0].innerHTML.match(/\d+/));//номер загадки

var numCount = 0;
var numCountRigth = 0;
var counTry = document.getElementsByClassName('count-all')[0];
var countRight = document.getElementsByClassName('count-right')[0];

var leftButtom = document.getElementsByClassName('traingle-left')[0];
var rightButtom = document.getElementsByClassName('traingle-right')[0];

var textOfRiddle = document.getElementsByClassName('text-riddle')[0];//не использую



var task = document.getElementsByClassName('block-riddle__task')[0];



var arrRight = [0,0,0];


var answer1=["еда", "Еда", "пища", "Пища"];
var answer2=["свеча", "Свеча", "свечка", "Свечка", "Лёд", "лёд", "лед", "Лед"];
var answer3=["луна", "Луна", "фонарь", "Фонарь"];

var taskArr = ["Она является ежедневной необходимостью?", "Может таять, плавиться?", "Светит, но не греет?"];


if(butStart.length > 0){
    butStart[0].onclick = function () {
        butStart[0].style.display = "none";
        openRiddle[0].style.opacity = "1";
        openRiddle[0].style.transform = "translate(0px)";
        return false;
    }
}

if(checkAnswer.length > 0){
    checkAnswer[0].onclick = function(params) {
        num = parseInt(numberAnswer[0].innerHTML.match(/\d+/));
        if(num == 1){
            if(compare(inputAnswer.value, answer1)){
                numCount += 1;
                numCountRigth += 1;
                counTry.innerHTML = numCount;
                countRight.innerHTML = numCountRigth;
                arrRight[0] = 1;
                //task.style.transform = "translate(200%)";
                task.style.opacity = "0";
                task.style.transition = "all 0.8s ease";

                alert("Верно! ваш ответ " + inputAnswer.value)
                setTimeout(() => {
                    if (arrRight[1] == 1){
                        if (arrRight[2] == 1){
                            if(ifwin(arrRight)){
                                win();
                            }
                        }
                        else{
                            num = parseInt(numberAnswer[0].innerHTML.match(/\d+/));
                            viewTask3();
                        }
                    }
                    else{
                        num = parseInt(numberAnswer[0].innerHTML.match(/\d+/));
                        viewTask2();
                    }
                    //task.style.transform = "translate(0px)";
                    task.style.opacity = "1";   
                }, 500);
                         
            }
            else{
                alert("Неверно")
                numCount += 1;
                counTry.innerHTML = numCount;

            }
        }
        if (num == 2) {
            if(compare(inputAnswer.value, answer2)){
                numCount += 1;
                numCountRigth += 1;
                counTry.innerHTML = numCount;
                countRight.innerHTML = numCountRigth;
                arrRight[1] = 1;
                task.style.opacity = "0";
                task.style.transition = "all 0.8s ease";

                alert("Верно! ваш ответ " + inputAnswer.value)
                setTimeout(() => {
                    if (arrRight[2] == 1){
                        if (arrRight[0] == 1){
                            if(ifwin(arrRight)){
                                win();
                            }
                        }
                        else{
                            num = parseInt(numberAnswer[0].innerHTML.match(/\d+/));
                            viewTask1();
                        }
                    }
                    else{
                        num = parseInt(numberAnswer[0].innerHTML.match(/\d+/));
                        viewTask3();
                    }
                    //task.style.transform = "translate(0px)";
                    task.style.opacity = "1";   
                }, 500);
            }
            else{
                alert("Неверно")
                numCount += 1;
                counTry.innerHTML = numCount;

            }
        }
        if (num == 3) {
            if(compare(inputAnswer.value, answer3)){
                numCount += 1;
                numCountRigth += 1;
                counTry.innerHTML = numCount;
                countRight.innerHTML = numCountRigth;
                arrRight[2] = 1;
                task.style.opacity = "0";
                task.style.transition = "all 0.8s ease";

                alert("Верно! ваш ответ " + inputAnswer.value)
                setTimeout(() => {
                    if (arrRight[0] == 1){
                        if (arrRight[1] == 1){
                            if(ifwin(arrRight)){
                                win();
                            }
                        }
                        else{
                            num = parseInt(numberAnswer[0].innerHTML.match(/\d+/));
                            viewTask2();
                        }
                    }
                    else{
                        num = parseInt(numberAnswer[0].innerHTML.match(/\d+/));
                        viewTask1();
                    }
                    //task.style.transform = "translate(0px)";
                    task.style.opacity = "1";   
                }, 500);
            }
            else{
                alert("Неверно")
                numCount += 1;
                counTry.innerHTML = numCount;
                
            }
        }
        return false;
    }
}


function compare(item, arr) {
    var flag = false;
    for (let index = 0; index < arr.length; index++) {
        if(item == arr[index]){
            flag = true;
        }        
    }
    return flag;
}

function ifwin(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
                sum+=arr[i];
    }
    if (sum == arr.length) return true;
    else return false;
}


function win(params) {
    alert("Поздравляю, вы ответили на все загадки")
    numberAnswer[0].innerHTML = "Итоговая статистика:";
    textOfRiddle.innerHTML = "Количество попыток: "+numCount;
    document.getElementsByClassName('input-check')[0].style.visibility = "hidden";
    document.getElementsByClassName('block-riddle__buttom')[0].style.visibility = "hidden";
    document.getElementsByClassName('block-riddle__count')[0].style.visibility = "hidden";
    document.getElementsByClassName('fin')[0].style.display = "unset";
}


function viewTask1(params) {
    numberAnswer[0].innerHTML = "Загадка #1";
    textOfRiddle.innerHTML = taskArr[0];
    inputAnswer.value = "";
}
function viewTask2(params) {
    numberAnswer[0].innerHTML = "Загадка #2";
    textOfRiddle.innerHTML = taskArr[1];
    inputAnswer.value = "";
}
function viewTask3(params) {
    numberAnswer[0].innerHTML = "Загадка #3";
    textOfRiddle.innerHTML = taskArr[2];
    inputAnswer.value = "";
}


rightButtom.onclick = function (params) {
    task.style.opacity = "0";
    task.style.transition = "all 0.2s ease";
    num = parseInt(numberAnswer[0].innerHTML.match(/\d+/));
    if (num == 1){
        if(!arrRight[1] == 1){      
            
            setTimeout(() => {
                viewTask2();
                task.style.transition = "all 0.4s ease";
                task.style.opacity = "1";
            }, 100);
        }
        else{
            if(!arrRight[2] == 1){
                setTimeout(() => {
                    viewTask3();
                    task.style.transition = "all 0.4s ease";
                    task.style.opacity = "1";
                }, 100);
            }
            else{
                alert("Вам остался только этот вопрос!");
            }
        }
    }
    if (num == 2){
        if(!arrRight[2] == 1){
            setTimeout(() => {
                viewTask3();
                task.style.transition = "all 0.4s ease";
                task.style.opacity = "1";
            }, 100);
        }
        else{
            if(!arrRight[0] == 1){
                setTimeout(() => {
                    viewTask1();
                    task.style.transition = "all 0.4s ease";
                    task.style.opacity = "1";
                }, 100);
            }
            else{
                alert("Вам остался только этот вопрос!");
            }
        }
        
    }
    if (num == 3){
        if(!arrRight[0] == 1){
            setTimeout(() => {
                viewTask1();
                task.style.transition = "all 0.4s ease";
                task.style.opacity = "1";
            }, 100);
        }
        else{
            if(!arrRight[1] == 1){
                setTimeout(() => {
                    viewTask2();
                    task.style.transition = "all 0.4s ease";
                    task.style.opacity = "1";
                }, 100);
            }
            else{
                alert("Вам остался только этот вопрос!");
            }
        }
    }
}
leftButtom.onclick = function (params) {
    task.style.opacity = "0";
    task.style.transition = "all 0.2s ease";
    num = parseInt(numberAnswer[0].innerHTML.match(/\d+/));
    if (num == 1){
        if(!arrRight[2] == 1){
            setTimeout(() => {
                viewTask3();
                task.style.transition = "all 0.4s ease";
                task.style.opacity = "1";
            }, 100);
        }
        else{
            if(!arrRight[1] == 1){
                setTimeout(() => {
                    viewTask2();
                    task.style.transition = "all 0.4s ease";
                    task.style.opacity = "1";
                }, 100);
            }
            else{
                alert("Вам остался только этот вопрос!");
            }
        }
    }
    if (num == 2){
        if(!arrRight[0] == 1){
            setTimeout(() => {
                viewTask1();
                task.style.transition = "all 0.4s ease";
                task.style.opacity = "1";
            }, 100);
        }
        else{
            if(!arrRight[2] == 1){
                setTimeout(() => {
                    viewTask3();
                    task.style.transition = "all 0.4s ease";
                    task.style.opacity = "1";
                }, 100);
            }
            else{
                alert("Вам остался только этот вопрос!");
            }
        }
        
    }
    if (num == 3){
        if(!arrRight[1] == 1){
            setTimeout(() => {
                viewTask2();
                task.style.transition = "all 0.4s ease";
                task.style.opacity = "1";
            }, 100);
        }
        else{
            if(!arrRight[0] == 1){
                setTimeout(() => {
                    viewTask1();
                    task.style.transition = "all 0.4s ease";
                    task.style.opacity = "1";
                }, 100);
            }
            else{
                alert("Вам остался только этот вопрос!");
            }
        }
    }
}

document.getElementsByClassName('fin')[0].onclick = function() {
    openRiddle[0].style.opacity = "0";
    openRiddle[0].style.transition = "all 0s ease";
    document.getElementsByClassName('fin')[0].style.display = "none";
    arrRight = [0,0,0];
    viewTask1();
    numCount = 0;
    numCountRigth = 0;
    counTry.innerHTML = numCount;
    countRight.innerHTML = numCountRigth;
    document.getElementsByClassName('input-check')[0].style.visibility = "";
    document.getElementsByClassName('block-riddle__buttom')[0].style.visibility = "";
    document.getElementsByClassName('block-riddle__count')[0].style.visibility = "";
    butStart[0].style.display = "block";
}
