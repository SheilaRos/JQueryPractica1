$(document).ready(inicio);

function inicio(){
    $("#nombres").hide();
    $("#fight").click(primeraFuncion);
    $("#jugador1>.fgt").mouseenter(agrandarJ1);
    $("#jugador2>.fgt").mouseenter(agrandarJ2);
    $("#jugador1>.fgt").click(seleccionJ1);
    $("#jugador2>.fgt").click(seleccionJ2);
}
var opcionJ1 = null;
var opcionJ2 = null;
var jugador = 0;
var nombre1;
var nombre2;
function primeraFuncion(){
    $("#jugador1>.fgt").mouseenter(agrandarJ1);
    $("#jugador2>.fgt").mouseenter(agrandarJ2);
    $("#jugador1>.fgt").click(seleccionJ1);
    $("#jugador2>.fgt").click(seleccionJ2);
    opcionJ1 = null;
    opcionJ2 = null;
    $("#jugador1>img").hide();
    $(".ocultar").hide();
    $("#jugador2>img").hide();
    jugador = 1;
    $("#nombres").show();
    $("#seleccionar").click(nombreIntro);
}
function nombreIntro(){
    nombre1 = $("#nombre1").val();
    nombre2 = $("#nombre2").val();
    $("#1").text(nombre1);
    $("#player1Win").text(nombre1+" Win");
    $("#2").text(nombre2);
    $("#player2Win").text(nombre2+" Win");
    $("#nombres").hide();
    comienzaJ1();
}

function comienzaJ1(){
    $("#jugador1>img").show();
    $(".fgt").css({"width":"120px", "height":"120px", "position":"relative", "left":"0px", "top":"0px"});
    $("#jugador1>h3").css({"background-color":"BLUE"});
}
function agrandarJ1(){
    if(jugador != 0){
            $("#jugador1>.fgt").animate({"width": "100px", "height": "100px"}, {"duration": "2500"});
            $(this).stop();
            $(this).animate({"width": "140px", "height": "140px"}, 
            {"duration": "2500", complete:$(this).mouseleave(normalizar)});
    }
}
function agrandarJ2(){
    if(jugador >1){
            $("#jugador2>.fgt").animate({"width": "100px", "height": "100px"}, {"duration": "2500"});
            $(this).stop();
            $(this).animate({"width": "140px", "height": "140px"}, 
            {"duration": "2500", complete:$(this).mouseleave(normalizar)});
    }
}
function normalizar(){
    $(".fgt").css({"width":"120px", "height":"120px"});
}
function seleccionJ1(){
    if(jugador != 0){
        opcionJ1 = $(this).attr("id");
        $("#jugador1>img").off();
        $("#jugador1>img").hide();
        $("#jugador1>h3").css({"background-color":"TRANSPARENT"});
        $("#jugador2>h3").css({"background-color":"BLUE"});
        $("#jugador2>img").show();
        jugador = 2;
    }   
}
function seleccionJ2(){
    if(jugador != 0){
       $("#jugador2>h3").css({"background-color":"TRANSPARENT"});
        opcionJ2 = $(this).attr("id");
        $("#jugador2>img").off();
        $("#jugador2>img").hide(); 
        ganador();
    }
}
function ganador(){
    $("#fight").show();
    $("#"+opcionJ1+"").show();
    $("#"+opcionJ2+"").show();
    if(opcionJ1 == "rock1" && opcionJ2 == "scissor2" || opcionJ1 == "scissor1" && opcionJ2 == "paper2" || opcionJ1 == "paper1" && opcionJ2 == "rock2" || opcionJ1 == "rock1" && opcionJ2 == "lizzard2" 
            || opcionJ1 == "lizzard1" && opcionJ2 == "spock2" || opcionJ1 == "spock1" && opcionJ2 == "scissor2" || opcionJ1 == "scissor1" && opcionJ2 == "lizzard2" ||
            opcionJ1 == "lizzard1" && opcionJ2 == "paper2" || opcionJ1 == "paper1" && opcionJ2 == "spock2" || opcionJ1 == "spock1" && opcionJ2 == "rock2"){
        $("#player1Win").show();
    }else if(opcionJ1 == "rock1" &&  opcionJ2 == "rock2" || opcionJ1 == "scissor1" &&  opcionJ2 == "scissor2" || opcionJ1 == "paper1" && opcionJ2 == "paper2"
            || opcionJ1 == "spock1" &&  opcionJ2 == "spock2" || opcionJ1 == "lizzard1" &&  opcionJ2 == "lizzard2"){
        $("#draw").show();
    }else{
         $("#player2Win").show();
    }
    $("#"+opcionJ1+"").animate({"left": "150px", "top": "150px"}, {"duration": "2500"});
    $("#"+opcionJ2+"").animate({"left": "-150px", "top": "150px"}, {"duration": "2500"});
}
