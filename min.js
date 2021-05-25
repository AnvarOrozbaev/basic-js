var smallImgs = document.querySelectorAll('img');



for (var i = 0; i < smallImgs.length; i++) {
    var bigImg = document.createElement('img');
    bigImg.setAttribute('class', 'big__img')
    document.getElementById('bI').append(bigImg);


    smallImgs[i].onclick = f;
    var bigImgesAll = document.getElementsByClassName('big__img');
    bigImgesAll[i].id = i;
    bigImgesAll[i].onerror = f1;



}
function f1() {
    alert("ERrOR!!!!!");
};

var bigImgesAll = document.getElementsByClassName('big__img');
bigImgesAll[1].classList.toggle('big__img--active');
bigImgesAll[1].src = 'images/big/card-1.png';
function f(e) {
    for (var j = 0; j < bigImgesAll.length; j++) {
        bigImgesAll[j].classList.remove('big__img--active');
    }


    switch (e.target) {
        case smallImgs[0]:

            bigImgesAll[0].classList.toggle('big__img--active');
            bigImgesAll[0].src = 'images/big/card-0.png';

            break;
        case smallImgs[1]:
            bigImgesAll[1].classList.toggle('big__img--active');
            bigImgesAll[1].src = 'images/big/card-1.png';

            break;

        case smallImgs[2]:
            bigImgesAll[2].classList.toggle('big__img--active');
            bigImgesAll[2].src = 'images/big/card-2.png';
            break;

    }
};
//=================SLIDER==============//

var inner = document.getElementsByClassName('big__inner');
var arrowLeft = document.createElement('button');
arrowLeft.setAttribute('class', 'arrowSlider arrow__left');
var arrowRight = document.createElement('button');
arrowRight.setAttribute('class', 'arrowSlider arrow__right');
inner[0].append(arrowLeft);
inner[0].append(arrowRight);
arrowRight.innerText = "вправо";
arrowLeft.innerText = "влево";
var getArrows = document.getElementsByClassName('arrowSlider ');
for (i = 0; i < 2; i++) {
    getArrows[i].onclick = slider;
    getArrows[i].style.width = '50px';
    getArrows[i].style.height = '50px';

}
function slider(event) {
    var current = document.getElementsByClassName('big__img--active');
    var idImg = +(current[0].id);

    switch (event.target) {
        case (arrowLeft):

            bigImgesAll[idImg].classList.remove('big__img--active');
            idImg = idImg - 1;
            if (idImg < 0) {
                idImg = 0;
                bigImgesAll[idImg].classList.toggle('big__img--active');
                bigImgesAll[idImg].src = 'images/big/card-' + idImg + '.png';
            } else {
                bigImgesAll[idImg].classList.toggle('big__img--active');
                bigImgesAll[idImg].src = 'images/big/card-' + idImg + '.png';
            }
            break;

        case (arrowRight):

            bigImgesAll[idImg].classList.remove('big__img--active');
            idImg = idImg + 1;

            if (idImg < bigImgesAll.length) {
                bigImgesAll[idImg].classList.toggle('big__img--active');
                bigImgesAll[idImg].src = 'images/big/card-' + idImg + '.png';
            } else {
                idImg = bigImgesAll.length - 1;
                bigImgesAll[idImg].classList.toggle('big__img--active');
                bigImgesAll[idImg].src = 'images/big/card-' + idImg + '.png';
            }
            break;

    }

}




