function calcularEdad(fechaNacStr) {
  const [año, mes, dia] = fechaNacStr.split("-").map(Number);
  const hoy = new Date();
  let edad = hoy.getFullYear() - año;

  if (
    hoy.getMonth() + 1 < mes ||
    (hoy.getMonth() + 1 === mes && hoy.getDate() < dia)
  ) {
    edad--;
  }

  return edad;
}

function agregarFila() {
  const cedula = document.getElementById("cedula").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;

  if (!cedula || !nombre || !apellido || !fechaNacimiento) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const edad = calcularEdad(fechaNacimiento);

  const tabla = document
    .getElementById("tablaDatos")
    .getElementsByTagName("tbody")[0];
  const nuevaFila = tabla.insertRow();

  nuevaFila.insertCell(0).textContent = cedula;
  nuevaFila.insertCell(1).textContent = nombre;
  nuevaFila.insertCell(2).textContent = apellido;
  nuevaFila.insertCell(3).textContent = fechaNacimiento;
  nuevaFila.insertCell(4).textContent = edad + " años";

  const celdaAcciones = nuevaFila.insertCell(5);
  const icono = document.createElement("i");
  icono.className = "fas fa-trash icono-eliminar";
  icono.title = "Eliminar";
  icono.onclick = function () {
    const confirmar = confirm(
      "¿Estás seguro de que deseas eliminar este registro?"
    );
    if (confirmar) {
      tabla.deleteRow(nuevaFila.rowIndex - 1);
    }
  };
  celdaAcciones.appendChild(icono);

  // Limpiar campos
  document.getElementById("cedula").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("fechaNacimiento").value = "";
}
