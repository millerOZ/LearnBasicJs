const anioActual = new Date().getFullYear();

const dateInput = document.getElementById("date-id");
let fechaSeleccionada = "";
dateInput.addEventListener("change", function () {
  fechaSeleccionada = this.value;

  const anioSeleccionado = new Date(fechaSeleccionada).getFullYear();
  const edad = anioActual - anioSeleccionado;

  const resultadoElemento = document.getElementById("resultado-edad");
  resultadoElemento.textContent = `Tu edad es: ${edad} años`;
});
