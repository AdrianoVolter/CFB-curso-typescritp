"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 1] = "domingo";
    dias[dias["segunda"] = 2] = "segunda";
    dias[dias["terca"] = 3] = "terca";
    dias[dias["quarta"] = 4] = "quarta";
    dias[dias["quinta"] = 5] = "quinta";
    dias[dias["sexta"] = 6] = "sexta";
    dias[dias["sabado"] = 7] = "sabado";
})(dias || (dias = {}));
const d = new Date();
var cores;
(function (cores) {
    cores["vermelho"] = "#FF0000";
    cores["verde"] = "#00FF00";
    cores["azul"] = "#0000FF";
    cores["branco"] = "#FFFFFF";
    cores["preto"] = "#000000";
})(cores || (cores = {}));
console.log(cores.vermelho);
console.log(cores['vermelho']);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["admin"] = 10] = "admin";
    tipoUsuario[tipoUsuario["user"] = 300] = "user";
    tipoUsuario[tipoUsuario["guest"] = 700] = "guest";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.admin);
const tp = tipoUsuario.guest;
console.log(tp);
