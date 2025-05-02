function eliminarFila(icono) {
  const confirmar = confirm(
    "¿Estás seguro de que deseas eliminar este registro?"
  );
  if (confirmar) {
    const fila = icono.closest("tr");
    fila.remove();
  }
}

function verPersona(icono) {
  const fila = icono.closest("tr");
  const celdas = fila.querySelectorAll("td");
  const cedula = celdas[0].textContent;
  const nombre = celdas[1].textContent;
  const apellido = celdas[2].textContent;
  const fecha = celdas[3].textContent;

  alert(
    `Datos de la persona:\n\nCédula: ${cedula}\nNombre: ${nombre}\nApellido: ${apellido}\nFecha de nacimiento: ${fecha}`
  );
}
