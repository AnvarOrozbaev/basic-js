

var s = 0, userAnswer;

for (var i = 0, j = 1; i <= data.length, j <= data.length; i++, j++) {
    userAnswer = (prompt(j + ' вопрос: ' + data[i].q + '\n варианты ответов: \n' + 'a: '+ data[i].a + '\n' + 'b: '+ data[i].b + '\n' + 'c: ' + data[i].c + '\n' + 'd: ' + data[i].d + '\n')).toLowerCase();
    if (userAnswer != data[i].correct) {
        alert('Это неправильный ответ.\n Правильный ответ: ' + data[i].correct);
        break;
    } else {
        s += 10;
        alert('Это правильный ответ. У вас ' + s + ' очков');
    }

};
(s == data.length * 10) ?
    alert('Победа! Вы набрали ' + s + ' очков') : alert('Проигрыш. Вы набрали ' + s + ' очков. Количество правильных ответов: ' + i);


