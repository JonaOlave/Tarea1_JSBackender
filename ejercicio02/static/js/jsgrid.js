var $c_rojo = $('.c_rojo');
var $c_verde = $('.c_verde');
var $c_azul = $('.c_azul');

var $cg = $('#cg');

var $block1 = $("#block1");
var $block2 = $("#block2");
var $block3 = $("#block3");
var $block4 = $("#block4");
var $block6 = $("#block6");
var $block7 = $("#block7");
var $block9 = $("#block9");
var $block10 = $("#block10");
var $block11 = $("#block11");
var $block12 = $("#block12");

var $boton = $(".boton");
var $boton1 = $("#boton1");
var $boton2 = $("#boton2");
var $boton3 = $("#boton3");

var $circulo_rojo = $("#circulo1");
var $circulo_verde = $("#circulo2");
var $circulo_azul = $("#circulo3");

var $block5b = $("#block5b");
var nombre = 1;
var color = 'red';
var $block5 = $("#block5");
var itmas = 1;

var maclas = new Array('','c_rojo','c_verde','c_azul','c_rojo','c_blanco','c_rojo','c_verde','c_azul','c_azul','c_verde','c_rojo');

$cg.on('click','div',function(){
    var elid=$(this).attr('class');
    if(elid=="c_rojo"){
        camcol('c_azul','c_rojo',0);
    }
    if(elid=="c_verde"){
        camcol('c_verde','c_azul',0);
    }
    if(elid=="c_azul"){
        camcol('c_azul','c_blanco',0);
    }
});


//Botones
$boton1.on('click', function(){
    if(itmas==3) { itmas=0; }
    itmas=itmas+1;
    imafo(itmas);
    console.log(itmas);
});

$boton2.on('click', function(){
    $block5.css('background-image', 'url()');
    $block5.css('background-color', 'white');
});

$boton3.on('click', function(){
    if(itmas==1) { itmas=4; }
    itmas=itmas-1;
    imafo(itmas);
    console.log(itmas);
});

//Circulos

$block5b.on('mouseover','div', function(){
    
    var ide = $(this).attr('id');  
    if(ide=='block5b1'){
        camcol('a','b',1); 
    }
    if(ide=='block5b2'){
        camcol('a','b',2); 
    }
    if(ide=='block5b3'){
        camcol('a','b',3); 
    }
    //cambio(ide);  
});
/*
$block5b.on('mouseout','div', function(){
    console.log("aquiestoy");
    var clase = $(this).attr('class');
    $block1.css('background-color', 'red');
    $block2.css('background-color', 'green');
    $block3.css('background-color', 'blue');
    $block4.css('background-color', 'red');
    $block6.css('background-color', 'red');
    $block7.css('background-color', 'green');
    $block9.css('background-color', 'blue');
    $block10.css('background-color', 'blue');
    $block11.css('background-color', 'green');
    $block12.css('background-color', 'red');
    $boton1.css('background-color', 'white');
    $boton2.css('background-color', 'white');
    $boton3.css('background-color', 'white');
});
*/
//funciones

function camcol(a,b,c){
    //console.log("aqui");
    for(i=1;i<13;i++)
    {
        if(i!=8)
        {
            if(c==0){
                var cclor = $("#block"+i).attr('class');
                if(cclor==a)
                {
                    $('#block'+i).removeClass(a);
                    $('#block'+i).addClass(b);
                    maclas[i]=b;
                }
            }            
            if(c==1){
                $('#block'+i).removeClass();
                $('#block'+i).addClass('c_rojo');
                $('#boton1').css('background-color', 'red');
                $('#boton2').css('background-color', 'red');
                $('#boton3').css('background-color', 'red');
            }
            if(c==2){
                $('#block'+i).removeClass();
                $('#block'+i).addClass('c_verde');
                $('#boton1').css('background-color', 'green');
                $('#boton2').css('background-color', 'green');
                $('#boton3').css('background-color', 'green');
            }
            if(c==3){
                $('#block'+i).removeClass();
                $('#block'+i).addClass('c_azul');
                $('#boton1').css('background-color', 'blue');
                $('#boton2').css('background-color', 'blue');
                $('#boton3').css('background-color', 'blue');
            }
        }
    }
}

function cambio(a){
    console.log(a);
    if(a=="block5b1"){
        color="red";
        console.log(color+"if 1");
    }
    if(a=="block5b2"){
        color="green";
        console.log(color+"if 2");
    }
    if(a=="block5b3"){
        color="blue";
        console.log(color+"if 3");
    }

    console.log("Puntero en Circulo" + color);
    $c_rojo.css('background-color', color);
    $c_verde.css('background-color', color);
    $c_azul.css('background-color', color);
    $circulo_rojo.css('background-color', color);
    $circulo_verde.css('background-color', color);
    $circulo_azul.css('background-color', color);
    $boton.css('background-color', color);
}

function imafo(b)
{
    $block5.removeAttr('background-color');
    var dima = "static/img/ima"+b+".png";
    $block5.css('background-image', 'url('+dima+')');
}