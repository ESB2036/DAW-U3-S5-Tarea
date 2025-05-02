function calcular() {
  let num1 = parseFloat(document.getElementById("numero1").value) || 0;
  let num2 = parseFloat(document.getElementById("numero2").value) || 0;
  let operacion = document.getElementById("operacion").value;
  let resultado;

  switch (operacion) {
    case "sumar":
      resultado = num1 + num2;
      break;
    case "restar":
      resultado = num1 - num2;
      break;
    case "multiplicar":
      resultado = num1 * num2;
      break;
    case "dividir":
      resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero";
      break;
    default:
      resultado = "Operación inválida";
  }

  document.getElementById("resultado").value = resultado;
}
