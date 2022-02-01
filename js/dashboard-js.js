/*
var options = document.getElementsByTagName('ul');

var x = options[0].innerHTML;

//alert(x);

*/


/*
var option = document.getElementsByClassName('option') ;
var i ;

for (i = 0 ; i < option.length ; i++ ){
    alert(option[i]);
}
*/

function hide (){
var hide = document.getElementById('userInfo') ;
var shot = document.getElementById('shot') ;

hide.style.display = "none" ;
shot.style.display = "flex";
}


function show() {
    var hide = document.getElementById('userInfo') ;
var shot = document.getElementById('shot') ;

hide.style.display = "flex" ;
shot.style.display = "none";
}