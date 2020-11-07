// Mudar a cor no cabeçalho (menu)
document.getElementById("conversorUnidades").style.backgroundColor = "rgb(82, 139, 141)";

let tiposUnitsList = document.getElementById("tipoUnidade");
let tiposEunidades = {};
tiposEunidades['comprimento'] = ['Selecione aqui', 'Metros', 'Milimetros', 'Centímetros', 'Quilômetros', 'Léguas', 'Milhas', 'Pés', 'Polegadas'];
tiposEunidades['temperatura'] = ['Selecione aqui', 'Fahrenheit', 'Celsius', 'Kelvin'];
tiposEunidades['massa'] = ['Selecione aqui', 'Gramas', 'Quilogramas', 'Miligramas', 'Libras', 'Microgramas', 'Toneladas'];
tiposEunidades['volume'] = ['Selecione aqui', 'Litros', 'Centímetros Cúbicos', 'Metros Cúbicos', 'Mililitros'];

function unidade1(){
    document.getElementById("selecionadoTipo").style.visibility = "visible";
    document.getElementById("numeroCalculado").style.visibility = "hidden";
    document.getElementById("numeroCalculado").innerHTML = `0`;
    document.getElementById("unidConverter").style.visibility = "hidden";
    let unidadesList = document.getElementById("unidSelecionada");
    let unidadeSelecionada = tiposUnitsList.options[tiposUnitsList.selectedIndex].value;

    
    if (unidadeSelecionada != "none") {
        while (unidadesList.options.length) {
            unidadesList.remove(0);
        }

        let unidades = tiposEunidades[unidadeSelecionada];
        if (unidades) {
            for (let contador = 0; contador < unidades.length; contador++) {
                let unidade  = new Option(unidades[contador], contador);
                unidadesList.options.add(unidade);
            }
        }
    } else {
        document.getElementById("selecionadoTipo").style.visibility = "hidden";
        document.getElementById("numeroCalculado").style.visibility = "hidden";
    }
}

function unidade2(){
    document.getElementById("unidConverter").style.visibility = "visible";
    document.getElementById("numeroCalculado").style.visibility = "visible";
    document.getElementById("numeroCalculado").style.display = "block";
    let unidades2List = document.getElementById("unidConverter");
    let unidade2Selecionada = tiposUnitsList.options[tiposUnitsList.selectedIndex].value;
    while (unidades2List.options.length) {
        unidades2List.remove(0);
    }

    let unidades2 = tiposEunidades[unidade2Selecionada];
    if (unidades2) {
        for (let contador2 = 0; contador2 < unidades2.length; contador2++) {
            let unidade2 = new Option(unidades2[contador2], contador2);
            unidades2List.options.add(unidade2);
        }
    }
}

function converterNumero(){
    // Pegar os tipos de unidades e o número a ser convertido
    let tipounid = document.getElementById("tipoUnidade").value;
    let unidades1 = document.getElementById("unidSelecionada");
    let unidades2 = document.getElementById("unidConverter");
    let unidade1 = unidades1.options[unidades1.selectedIndex].text;
    let unidade2 = unidades2.options[unidades2.selectedIndex].text;
    let numero = parseInt(document.getElementById("primeiroNumero").value);
    // Comparação e conversão
    // Comprimento
    // Metro -> Outra
    if (tipounid == "comprimento" && unidade1 == 'Metros' && unidade2 == 'Milimetros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*(Math.pow(10, -3))} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Metros' && unidade2 == 'Centímetros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*(Math.pow(10, -2))} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Metros' && unidade2 == 'Quilômetros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*Math.pow(10, 3)} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Metros' && unidade2 == 'Léguas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero/4829} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Metros' && unidade2 == 'Milhas') {
    document.getElementById("numeroCalculado").innerHTML = `${numero/1609} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Metros' && unidade2 == 'Pés') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Metros' && unidade2 == 'Polegadas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*39.3701} ${unidade2}`;
    } else if (unidade1 == unidade2) {
        if (numero == ''){
            document.getElementById("numeroCalculado").innerHTML = `0 ${unidade2}`
        } else {
            document.getElementById("numeroCalculado").innerHTML = `${numero} ${unidade2}`
        }
    }
    // Milimetros -> Outra
    else if (tipounid == "comprimento" && unidade1 == 'Milimetros' && unidade2 == 'Metros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*(Math.pow(10, -3))} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milimetros' && unidade2 == 'Centímetros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*(Math.pow(10, -1))} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milimetros' && unidade2 == 'Quilômetros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*Math.pow(10, 3)} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milimetros' && unidade2 == 'Léguas') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -3)))/4829} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milimetros' && unidade2 == 'Milhas') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -3)))/1609} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milimetros' && unidade2 == 'Pés') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -3)))*3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milimetros' && unidade2 == 'Polegadas') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -3)))*39.3701} ${unidade2}`;
    }
    // Centimetros -> Outra
    else if (tipounid == "comprimento" && unidade1 == 'Centímetros' && unidade2 == 'Metros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*(Math.pow(10, -2))} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Centímetros' && unidade2 == 'Milimetros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*(Math.pow(10, 1))} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Centímetros' && unidade2 == 'Quilômetros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*Math.pow(10, -5)} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Centímetros' && unidade2 == 'Léguas') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -2)))/4829} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Centímetros' && unidade2 == 'Milhas') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -2)))/1609} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Centímetros' && unidade2 == 'Pés') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -2)))*3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Centímetros' && unidade2 == 'Polegadas') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -2)))*39.3701} ${unidade2}`;
    }
    // Quilômetros -> Outra
    else if (tipounid == "comprimento" && unidade1 == 'Quilômetros' && unidade2 == 'Metros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*(Math.pow(10, 3))} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Quilômetros' && unidade2 == 'Milimetros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*(Math.pow(10, 6))} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Quilômetros' && unidade2 == 'Centímetros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*Math.pow(10, 5)} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Quilômetros' && unidade2 == 'Léguas') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, 3)))/4829} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Quilômetros' && unidade2 == 'Milhas') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, 3)))/1609} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Quilômetros' && unidade2 == 'Pés') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, 3)))*3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Quilômetros' && unidade2 == 'Polegadas') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, 3)))*39.3701} ${unidade2}`;
    }
    // Léguas -> Outra
    else if (tipounid == "comprimento" && unidade1 == 'Léguas' && unidade2 == 'Metros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*4829} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Léguas' && unidade2 == 'Milimetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -3)))*4829} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Léguas' && unidade2 == 'Centímetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -2)))*4829} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Léguas' && unidade2 == 'Quilômetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, 3)))*4829} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Léguas' && unidade2 == 'Milhas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*4829*1609} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Léguas' && unidade2 == 'Pés') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*4829*3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Léguas' && unidade2 == 'Polegadas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*4829*39.3701} ${unidade2}`;
    }
    // Milhas -> Outra
    else if (tipounid == "comprimento" && unidade1 == 'Milhas' && unidade2 == 'Metros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*1609} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milhas' && unidade2 == 'Milimetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -3)))*1609} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milhas' && unidade2 == 'Centímetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -2)))*1609} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milhas' && unidade2 == 'Quilômetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, 3)))*1609} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milhas' && unidade2 == 'Léguas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*4829*1609} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milhas' && unidade2 == 'Pés') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*1609*3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Milhas' && unidade2 == 'Polegadas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*1609*39.3701} ${unidade2}`;
    }
    // Pés -> Outra
    else if (tipounid == "comprimento" && unidade1 == 'Pés' && unidade2 == 'Metros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero/3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Pés' && unidade2 == 'Milimetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -3)))/3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Pés' && unidade2 == 'Centímetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -2)))/3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Pés' && unidade2 == 'Quilômetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, 3)))/3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Pés' && unidade2 == 'Léguas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*4829/3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Pés' && unidade2 == 'Milhas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*1609/3.28084} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Pés' && unidade2 == 'Polegadas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero*12} ${unidade2}`;
    }
    // Polegadas -> Outra
    else if (tipounid == "comprimento" && unidade1 == 'Polegadas' && unidade2 == 'Metros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero/39.3701} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Polegadas' && unidade2 == 'Milimetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -3)))/39.3701} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Polegadas' && unidade2 == 'Centímetros') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero*(Math.pow(10, -2)))/39.3701} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Polegadas' && unidade2 == 'Quilômetros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero/39370} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Polegadas' && unidade2 == 'Léguas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero/190080} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Polegadas' && unidade2 == 'Milhas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero/63360} ${unidade2}`;
    } else if (tipounid == "comprimento" && unidade1 == 'Polegadas' && unidade2 == 'Pés') {
        document.getElementById("numeroCalculado").innerHTML = `${numero/12} ${unidade2}`;
    }
    // Temperatura
    // Celsius -> Outra
    else if (tipounid == "temperatura" && unidade1 == 'Celsius' && unidade2 == 'Fahrenheit') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * (9/5) + 32} ${unidade2}`;
    } else if (tipounid == "temperatura" && unidade1 == 'Celsius' && unidade2 == 'Kelvin') {
        document.getElementById("numeroCalculado").innerHTML = `${numero + 273.15} ${unidade2}`;
    }
    // Fahrenheint -> Outra
    else if (tipounid == "temperatura" && unidade1 == 'Fahrenheit' && unidade2 == 'Celsius') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero - 32) * 5/9} ${unidade2}`;
    } else if (tipounid == "temperatura" && unidade1 == 'Fahrenheit' && unidade2 == 'Kelvin') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero - 32) * 5/9 + 273.15} ${unidade2}`;
    } 
    // Kelvin -> Outra
    else if (tipounid == "temperatura" && unidade1 == 'Kelvin' && unidade2 == 'Celsius') {
        document.getElementById("numeroCalculado").innerHTML = `${numero - 273.15} ${unidade2}`;
    } else if (tipounid == "temperatura" && unidade1 == 'Kelvin' && unidade2 == 'Fahrenheit') {
        document.getElementById("numeroCalculado").innerHTML = `${(numero - 273.15) * 9/5 + 32} ${unidade2}`;
    } 
    // Massa
    // Gramas -> Outra
    else if (tipounid == "massa" && unidade1 == 'Gramas' && unidade2 == 'Quilogramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / 1000} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Gramas' && unidade2 == 'Miligramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * 1000} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Gramas' && unidade2 == 'Toneladas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / Math.pow(10, -6)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Gramas' && unidade2 == 'Microgramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / Math.pow(10, 6)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Gramas' && unidade2 == 'Libras') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / 454} ${unidade2}`;
    } 
    // Quilogramas -> Outra
    else if (tipounid == "massa" && unidade1 == 'Quilogramas' && unidade2 == 'Gramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * 1000} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Quilogramas' && unidade2 == 'Miligramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, 6)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Quilogramas' && unidade2 == 'Toneladas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / 1000} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Quilogramas' && unidade2 == 'Microgramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, 9)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Quilogramas' && unidade2 == 'Libras') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * 2.205} ${unidade2}`;
    } 
    // Miligramas -> Outra
    else if (tipounid == "massa" && unidade1 == 'Miligramas' && unidade2 == 'Gramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / 1000} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Miligramas' && unidade2 == 'Quilogramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, -6)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Miligramas' && unidade2 == 'Toneladas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, -9)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Miligramas' && unidade2 == 'Microgramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * 1000} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Miligramas' && unidade2 == 'Libras') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / 453592} ${unidade2}`;
    }
    // Micrograma -> Outra
    else if (tipounid == "massa" && unidade1 == 'Microgramas' && unidade2 == 'Gramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, -6)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Microgramas' && unidade2 == 'Quilogramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, -9)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Microgramas' && unidade2 == 'Toneladas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, -12)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Microgramas' && unidade2 == 'Miligramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / 1000} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Microgramas' && unidade2 == 'Libras') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / Math.pow(4.536, 8)} ${unidade2}`;
    }
    // Toneladas -> Outra
    else if (tipounid == "massa" && unidade1 == 'Toneladas' && unidade2 == 'Gramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, 6)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Toneladas' && unidade2 == 'Quilogramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, 3)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Toneladas' && unidade2 == 'Microgramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, 12)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Toneladas' && unidade2 == 'Miligramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, 9)} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Toneladas' && unidade2 == 'Libras') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * 2205} ${unidade2}`;
    }
    // Libras -> Outra
    else if (tipounid == "massa" && unidade1 == 'Libras' && unidade2 == 'Gramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * 454} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Libras' && unidade2 == 'Quilogramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * 2.205} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Libras' && unidade2 == 'Toneladas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / 2205} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Libras' && unidade2 == 'Miligramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * 453592} ${unidade2}`;
    } else if (tipounid == "massa" && unidade1 == 'Libras' && unidade2 == 'Microgramas') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(4.536, 8)} ${unidade2}`;
    }
    // Volume
    // Litros -> Outra
    else if (tipounid == "volume" && unidade1 == 'Litros' && unidade2 == 'Centímetros Cúbicos') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, -6)} ${unidade2}`;
    } else if (tipounid == "volume" && unidade1 == 'Litros' && unidade2 == 'Metros Cúbicos') {
        document.getElementById("numeroCalculado").innerHTML = `${numero / 1000} ${unidade2}`;
    } else if (tipounid == "volume" && unidade1 == 'Litros' && unidade2 == 'Mililitros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * 1000} ${unidade2}`;
    }
    // Centímetros Cúbicos -> Outra
    else if (tipounid == "volume" && unidade1 == 'Centímetros Cúbicos' && unidade2 == 'Litros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, 3)} ${unidade2}`;
    } else if (tipounid == "volume" && unidade1 == 'Centímetros Cúbicos' && unidade2 == 'Metros Cúbicos') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, -6)} ${unidade2}`;
    } else if (tipounid == "volume" && (unidade1 == 'Centímetros Cúbicos' && unidade2 == 'Mililitros' || unidade1 == 'Mililitros' && unidade2 == 'Centímetros Cúbicos')) {
        document.getElementById("numeroCalculado").innerHTML = `${numero} ${unidade2}`;
    }
    // Metros Cúbicos -> Outra
    else if (tipounid == "volume" && unidade1 == 'Metros Cúbicos' && unidade2 == 'Litros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, 3)} ${unidade2}`;
    } else if (tipounid == "volume" && unidade1 == 'Metros Cúbicos' && (unidade2 == 'Centímetros Cúbicos' || unidade2 == 'Mililitros')) {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, 6)} ${unidade2}`;
    }
    // Militros
    else if (tipounid == "volume" && unidade1 == 'Metros Cúbicos' && unidade2 == 'Litros') {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, -3)} ${unidade2}`;
    } else if (tipounid == "volume" && unidade1 == 'Metros Cúbicos' && (unidade2 == 'Centímetros Cúbicos' || unidade2 == 'Mililitros')) {
        document.getElementById("numeroCalculado").innerHTML = `${numero * Math.pow(10, -6)} ${unidade2}`;
    }
}