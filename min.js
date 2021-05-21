function chessBoard(b){
var table, td, tr, th;
table = document.createElement('table');
table.style.borderSpacing = "0";
table.style.borderCollapse = "collapse";
table.style.border = "1px solid black";
document.querySelector(b).append(table);
for(var i = 0;i < 10;i++){
    
    tr = document.createElement("tr");
        tr.setAttribute('id', i);
    table.append(tr);
};
var alf = ["","a","b","c","d","e","f","g","h",""];
 for (var j = 0; j< alf.length; j++ ){
    th = document.createElement("th");// создаем тег th
    th.innerHTML = alf[j].toUpperCase(); // добавляем в тэг th  буквы
var th1 = document.createElement("th");
    th1.innerHTML = alf[j].toUpperCase();//добавляем в тэг th  буквы с противоположной стороны
      document.getElementById("0").append(th);// 
      th.style.transform = "rotate(180deg)"
      document.getElementById("9").append(th1);// 
 };
 for(var k = 0; k < 8; k++){
    i = k + 1;
    var thNum = document.createElement("th"); // cоздаем заголовки для цифр
   var  numId=k+10; 
    thNum.setAttribute('id', numId); // присваеваем id  
    thNum.innerHTML = 9 - i; //добавляем цифры
    var thNumReverse = document.createElement("th"); // cоздаем заголовки для цифр с др стороны
   // tthNumReverse.setAttribute('id', k+10);
     thNumReverse.innerHTML = 9 - i;// добавляем цифры  с противоположной стороны

     document.getElementById(i).append(thNum); //добавляем заголовки для цифр в HTML
     
     for (var l = 0; l < 8;l++){ // раскрашиваем доску в черно белый
       td = document.createElement("td");
       td.setAttribute("class", i);
       document.getElementById(i).append(td);

    
       if ( numId%2 == 0){
       if ( l%2 == 0){
             
               
            } else{ 
              
                td.style.background = "brown";
     }}
     else{
        if ( l%2 == 0){
           
          
            td.style.background = "brown";
           
        } else{ 
         
 }
     }
     td.style.border = '1px solid black';
     td.style.width = "2em";
     td.style.height = "2em"; 
     td.style.textAlign =  "center";

   }
     document.getElementById(i).append(thNumReverse);
     thNumReverse.style.transform = "rotate(180deg)";
 }


 thAll = document.querySelectorAll("th");
 for (var m = 0; m < thAll.length; m++){
     thAll[m].style.padding = ".5em"
}
}

function startCell(){  //функ-я для добавления фигур
var pawnsLineBlack = document.getElementsByClassName(2);
var coreLineBlack= document.getElementsByClassName(1);
var pawnsLineWhite = document.getElementsByClassName(7);
var coreLineWhite= document.getElementsByClassName(8);
coreLineBlack[0].innerHTML = "<span>&#9820;</span>";//ладья  черн
coreLineBlack[pawnsLineBlack.length-1].innerHTML = "<span>&#9820;</span>";//ладья черн
coreLineBlack[1].innerHTML = "<span>&#9822;</span>";//конь черн
coreLineBlack[pawnsLineBlack.length-2].innerHTML = "<span>&#9822;</span>";//конь черн
coreLineBlack[2].innerHTML = "<span>&#9821;</span>";//слон черн
coreLineBlack[pawnsLineBlack.length-3].innerHTML = "<span>&#9821;</span>";//слон черн
coreLineBlack[3].innerHTML = "<span>&#9819;</span>";//ферзь черн
coreLineBlack[pawnsLineBlack.length-4].innerHTML = "<span>&#9818;</span>"; // король черн
coreLineWhite[0].innerHTML = "<span>&#9814;</span>";// ладья бел
coreLineWhite[pawnsLineBlack.length-1].innerHTML = "<span>&#9814;</span>";// ладья бел
coreLineWhite[1].innerHTML = "<span>&#9816;</span>";//конь бел
coreLineWhite[pawnsLineBlack.length-2].innerHTML = "<span>&#9816;</span>";//конь бел
coreLineWhite[2].innerHTML = "<span>&#9815;</span>";// слон бел
coreLineWhite[pawnsLineBlack.length-3].innerHTML = "<span>&#9815;</span>";// слон бел
coreLineWhite[3].innerHTML = "<span>&#9813;</span>";// ферзь бел
coreLineWhite[pawnsLineBlack.length-4].innerHTML = "<span>&#9812;</span>";// коороль бел
for ( var i1 = 0; i1 < pawnsLineBlack.length; i1++){
    pawnsLineBlack[i1].innerHTML = "<span>&#9823;</span>";
    pawnsLineWhite[i1].innerHTML = "<span>&#9817;</span>";
}
}
chessBoard('div');
startCell();
