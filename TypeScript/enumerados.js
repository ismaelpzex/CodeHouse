var talla;
(function (talla) {
    talla[talla["sm"] = 0] = "sm";
    talla[talla["m"] = 1] = "m";
    talla[talla["l"] = 2] = "l";
    talla[talla["xl"] = 3] = "xl";
    talla[talla["xxl"] = 4] = "xxl";
})(talla || (talla = {}));
;
console.log(talla);
console.log(talla['0']);
console.log(talla.sm);
