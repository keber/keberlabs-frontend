"use strict";

function toTime() {
    var e = new Date;
    e.getFullYear(), e.getMonth(), e.getUTCDate(), e.getDay();
    return "a las " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + ", Zona Horaria de " + Intl.DateTimeFormat().resolvedOptions().timeZone
}

var dirUrl = function () {
    var e = window.location.pathname;
    return e.substring(0, e.lastIndexOf("/"))
}, capitalize = function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}, url = function (e) {
    return e.replace(" / ", "-").replace(".", "").replace(/[, ]+/g, " ").replace("/", "-").split(" ").join("-").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}, toDay = function () {
    var e = new Date, t = e.getFullYear(), r = e.getMonth() + 1, o = e.getUTCDate(), a = e.getDay();
    e.getHours(), e.getMinutes(), e.getSeconds();
    return "La fecha de hoy es " + ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"][a] + ", " + o + " de " + [" ", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][r] + " de " + t
};

// Capturamos los parametros GET del URL
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);