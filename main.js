function calcular(monto, cuotas) {
    const interes = [0.10, 0.25, 0.50, 1];
    return monto * (1 + interes[cuotas]);
  }

var monto, cuotas, montoDevolver, valorCuota;

while (true){

    monto=parseInt(prompt("Introduzca el dinero a solicitar"));
    cuotas=parseInt(prompt("Introduzca la cantidad de cuotas: 1,3,6,12"));

    if (cuotas == 1){
        montoDevolver = calcular(monto, 0);
        alert("Valor a devolver: $" + montoDevolver.toFixed(2) + "\nValor de cuota: $" + montoDevolver.toFixed(2));
    } else if (cuotas == 3){
        montoDevolver = calcular(monto, 1);
        valorCuota = montoDevolver / 3;
        alert("Valor a devolver: $" + montoDevolver.toFixed(2) + "\nValor de cuota: $" + valorCuota.toFixed(2));
    } else if (cuotas == 6){
        montoDevolver = calcular(monto, 2);
        valorCuota = montoDevolver / 6;
        alert("Valor a devolver: $" + montoDevolver.toFixed(2) + "\nValor de cuota: $" + valorCuota.toFixed(2));
    } else if (cuotas == 12){
        montoDevolver = calcular(monto, 3);
        valorCuota = montoDevolver / 12;
        alert("Valor a devolver: $" + montoDevolver.toFixed(2) + "\nValor de cuota: $" + valorCuota.toFixed(2));
    } else {
        alert("Solo se permiten 1, 3, 6 y 12 cuotas!!!");
    }

}


