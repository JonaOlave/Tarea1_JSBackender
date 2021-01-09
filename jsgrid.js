var $c_rojo = $(".c_rojo");
var $c_verde = $(".c_verde");
var $c_azul = $(".c_azul");

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

var $contenedor_inferior = $("#contenedor_inferior");
var nombre = 1;
var color = 'red';
var $block5 = $("#block5");
var itmas = 1;

//Rectangulos

/*$cg.on('click', 'div', function(){
    var ideid = $(this).attr('id');
    var idecl = $(this).attr('class');
    console.log(ideid);
    console.log(idecl);
    if(ideid != "block5" || ideid != "block8") {  }
    else { 
        for(i=1;i<13;i++)
        {
            var ita = $('#block'+i).attr('class');
            if(idecl == "c_rojo"){
                if(ita == "c_azul"){
                    $('#block'+i).removeClass("c_azul").addClass("c_rojo");
                }
            }
            if(idecl == "c_verde"){
                if(ita == "c_verde"){
                    $('#block'+i).removeClass("c_verde").addClass("c_azul");
                }
            }
            if(idecl == "c_azul"){
                if(ita == "c_azul"){
                    $('#block'+i).removeClass("c_azul").addClass("c_blanco");
                }
            }
        }
     }
});*/

$c_rojo.on('click', function(){
    console.log("Cuadrado rojo presionado");
    $c_azul.css('background-color', 'red');
});

$c_verde.on('click', function(){
    console.log("Cuadrado verde presionado")
    $c_verde.css('background-color', 'blue');
});

$c_azul.on('click', function(){
    console.log("Cuadrado azul presionado")
    $c_azul.css('background-color', 'white');
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

$contenedor_inferior.on('mouseover','div', function(){
    
    var ide = $(this).attr('id');    
    cambio(ide);  
});

$contenedor_inferior.on('mouseout','div', function(){
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

function cambio(a){
    console.log(a);
    if(a=="block8-1"){
        color="red";
        console.log(color+"if 1");
    }
    if(a=="block8-2"){
        color="green";
        console.log(color+"if 2");
    }
    if(a=="block8-3"){
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
    var dima = "img/ima"+b+".png";
    $block5.css('background-image', 'url('+dima+')');
}

    
