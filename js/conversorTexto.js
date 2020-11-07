// Mudar Página
function mudarPagina(pagina) {
    if (pagina == 'criptografiaBinaria') {
        document.getElementById("manipuladorTextos").style.display = "none";
        document.getElementById("conversorBinario").style.display = "block";
        document.getElementById("conversor").style.backgroundColor = "rgb(84, 139, 141)";
        document.getElementById("manipulador").style.backgroundColor = "cadetblue";
    } else if (pagina == 'manipularTexto') {
        document.getElementById("conversorBinario").style.display = "none";
        document.getElementById("manipuladorTextos").style.display = "block";
        document.getElementById("manipulador").style.backgroundColor = "rgb(84, 139, 141)";
        document.getElementById("manipulador").style.boxShadow = "0 0 10px rgb(84, 139, 141) 0 0 20px rgb(84, 139, 141) 0 0 30px rgb(84, 139, 141)";
        document.getElementById("conversor").style.backgroundColor = "cadetblue";
    }
}


// Letras, Número e caracteres em binário
let bin = ['00100000', '00100001', '00100010', '00100011', '00100100', '00100101', '00100110', '00100111', '00101000', '00101001', 
        '00101010', '00101011', '00101100', '00101101', '00101110', '00101111', '00110000', '00110001', '00110010', '00110011', 
        '00110100', '00110101', '00110110', '00110111', '00111000', '00111001', '00111010', '00111011', '00111100', '00111101', 
        '00111110', '00111111', '01000000', '01000001', '01000010', '01000011', '01000100', '01000101', '01000110', '01000111',
        '01001000', '01001001', '01001010', '01001011', '01001100', '01001101', '01001110', '01001111', '01010000', '01010001',
        '01010010', '01010011', '01010100', '01010101', '01010110', '01010111', '01011000', '01011001', '01011010', '01011011',
        '01011100', '01011101', '01011110', '01011111', '01100000', '01100001', '01100010', '01100011', '01100100', '01100101',
        '01100110', '01100111', '01101000', '01101001', '01101010', '01101011', '01101100', '01101101', '01101110', '01101111',
        '01110000', '01110001', '01110010', '01110011', '01110100', '01110101', '01110110', '01110111', '01111000', '01111001',
        '01111010', '01111011', '01111100', '01111101', '01111110', '01111111', '10000000', '10000001', '10000010', '10000011',
        '10000100', '10000101', '10000110', '10000111', '10001000', '10001001', '10001010', '10001011', '10001100', '10001101',
        '10001110', '10001111', '10010000', '10010001', '10010010', '10010011', '10010100', '10010101', '10010110', '10010111',
        '10011000', '10011001', '10011010', '10011011', '10011100', '10011101', '10011110', '10011111', '10100000', '10100001',
        '10100010', '10100011', '10100100', '10100101', '10100110', '10100111', '10101000', '10101001', '10101010', '10101011',
        '10101100', '10101101', '10101110', '10101111', '10110000', '10110001', '10110010', '10110011', '10110100', '10110101',
        '10110110', '10110111', '10111000', '10111001', '10111010', '10111011', '10111100', '10111101', '10111110', '10111111',
        '11000000', '11000001', '11000010', '11000011', '11000100', '11000101', '11000110', '11000111', '11001000', '11001001',
        '11001010', '11001011', '11001100', '11001101', '11001110', '11001111', '11010000', '11010001', '11010010', '11010011',
        '11010100', '11010101', '11010110', '11010111', '11011000', '11011001', '11011010', '11011011', '11011100', '11011101',
        '11011110', '11011111', '11100000', '11100001', '11100010', '11100011', '11100100', '11100101', '11100110', '11100111',
        '11101000', '11101001', '11101010', '11101011', '11101100', '11101101', '11101110', '11101111', '11110000', '11110001',
        '11110010', '11110011', '11110100', '11110101', '11110110', '11110111', '11111000', '11111001', '11111010', '11111011',
        '11111100', '11111101', '11111110', '11111111'];
let nmrAscii = [];
for (let contador = 32; contador <= 255; contador++){
    nmrAscii.push(contador);
}

function transformTextToBin() {
    let textoABin = document.getElementById("texto").value;
    document.getElementById("texto2").value = ``;
    for (let contador2 = 0; contador2 < textoABin.length; contador2++){
        for (let contador3 = 0; contador3 < nmrAscii.length; contador3++){ 
            let letraAscii = textoABin[contador2].charCodeAt();
            if (textoABin.length > 1) {
                if(letraAscii == nmrAscii[contador3]) {
                    document.getElementById("texto2").value += `${bin[contador3]} `;
                } 
            } else {
                if(letraAscii == nmrAscii[contador3]) {
                    document.getElementById("texto2").value += `${bin[contador3]}`;
                } 
            }
        }
    }
}

function transformBinToText() {
    let textoACrip = document.getElementById("texto2").value;
    document.getElementById("texto").value = ``;
    numeroBin = textoACrip.split(" ");
    numeroBin.pop();
    if (numeroBin.indexOf(" ")) {
        for(let contador2 = 0; contador2 < numeroBin.length; contador2++) {
            let indexOf = bin.indexOf(numeroBin[contador2]);
            let letra = String.fromCharCode(indexOf + 32);
            document.getElementById("texto").value += `${letra}`; 
        }
    }
}

// Copiar - clipboard
function copiar(texto) {
    if (texto == "textoToBin") {
        var textoACopiar = document.getElementById("texto");
        textoACopiar.select();
        textoACopiar.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Texto copiado!");
    } else if (texto == "textoToChar") {
        var textoACopiar = document.getElementById("texto2");
        textoACopiar.select();
        textoACopiar.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Texto copiado!");
    } else if (texto == "textoMan") {
        var textoACopiar = document.getElementById("textoMan");
        textoACopiar.select();
        textoACopiar.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Texto copiado!");
    }
    
}

// Manipulação textos
function transMaiusculas(){
    var texto = document.getElementById("textoMan").value;
    texto = texto.toLowerCase();
    texto = texto.charAt(0).toUpperCase() + texto.slice(1);
    for (let contador = 0; contador < texto.length; contador++) {
        if (texto.charAt(contador) == " ") {
            let letra = texto.charAt(contador+1).toUpperCase();
            let sliceAntes = texto.slice(0, (contador+1));
            let sliceFim = texto.slice(contador+2);
            texto = sliceAntes + letra + sliceFim;
        }
    }
    document.getElementById("textoManipulado").innerHTML = `${texto}`;
}

function transMinusculas(){
    var texto = document.getElementById("textoMan").value;
    texto = texto.toUpperCase();
    texto = texto.charAt(0).toLowerCase() + texto.slice(1);
    for (let contador = 0; contador < texto.length; contador++) {
        if (texto.charAt(contador) == " ") {
            let letra = texto.charAt(contador+1).toLowerCase();
            let sliceAntes = texto.slice(0, (contador+1));
            let sliceFim = texto.slice(contador+2);
            texto = sliceAntes + letra + sliceFim;
        }
    }
    document.getElementById("textoManipulado").innerHTML = `${texto}`;
}

function aoContrario(){
    var texto = document.getElementById("textoMan").value;
    var inverso = texto.split("").reverse().join("");
    document.getElementById("textoManipulado").innerHTML = `${inverso}`;
}

function alternado(){
    var texto = document.getElementById("textoMan").value;
    var textoAlternado = "";
    for(let contador = 0; contador < texto.length; contador++) {
        if(texto.charAt(contador) == texto.charAt(contador).toUpperCase()){
            textoAlternado += texto.charAt(contador).toLowerCase();
        } else {
            textoAlternado += texto.charAt(contador).toUpperCase();
        }
    }
    document.getElementById("textoManipulado").innerHTML = `${textoAlternado}`;
}

listaHeadDown = {
    " ": " ", a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ",
    h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o",
    p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", 
    x: "x", y: "ʎ", z: "z", A: "∀", B: "B", C: "Ɔ", D: "ᗡ", E: "Ǝ",
    F: "Ⅎ", G: "פ", H: "H", I: "I", J: "ſ", K: "K", L: "˥", M: "W",
    N: "N", O: "O", P: "Ԁ", Q: "Q", R: "R", S: "S", T: "┴", U: "∩",
    V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z", 0: "0", 1: "Ɩ", 2: "ᄅ",
    3: "Ɛ", 4: "ㄣ", 5: "ϛ", 6: "9", 7: "ㄥ", 8: "8", 9: "6", ",": "'", 
    ".": "˙", "?": "¿", "!": "¡", '"': ",,", "'": ",", "`": ",",
    "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{",
    "<": ">", ">": "<", "&": "⅋", _: "‾", "-": "-"
}

function cabecaPraBaixo() {
    var texto = document.getElementById("textoMan").value;
    var inverso = texto.split("").reverse().join("");
    var headDown = "";
    for(let contador = 0; contador < inverso.length; contador++) {
        headDown += listaHeadDown[inverso.charAt(contador)]
    }
    document.getElementById("textoManipulado").innerHTML = `${headDown}`;
}