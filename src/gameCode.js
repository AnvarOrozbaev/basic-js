//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];


    check(works.a00,works.a1,works.a2,works.a0,1);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
  
        check(works.b00,works.b1,works.b2,works.b0,2);

        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
               
                check(works.d00,works.d1,works.d2,works.d0,3);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                
                check(works.d00,works.d1,works.d2,works.d0,3);
                 break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: 
        check(works.c00,works.c1,works.c2,works.c0,2);

                           
        switch (event) {
            case 1: // Второе действие
               
                check(works.d00,works.d1,works.d2,works.d0,3);
                     
                break;

            case 2: // Второе действие
                   check(works.d00,works.d1,works.d2,works.d0,3);

                           
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

do {//Выводим первый вопрос
    ok = false;
   userAnswer = +prompt( 'Введите номер вопроса');
   ok = isAnswer(3,userAnswer);
    
} while (!ok);
alert (userAnswer + ' вопрос был: ' +  answers[userAnswer][0] + ' Ваш ответ : ' + answers[userAnswer][1]);


//console.log( );

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}
//----------------------------------------
function check(text, answer1, answer2, q,i){
do {//Выводим первый вопрос
    ok = false;
    event = +prompt(text + answer1 + answer2 + '-1 - Выход из игры');
   
 if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(q, event);
    }
   
} while (!ok);
(event == 1) ? 
answers[i] = [text, answer1] : (event == 2) ?
answers[i] = [text, answer2] : answers[i] = [text, ' -1 - выйти из игры'];
return event;
return answers[i];
};

