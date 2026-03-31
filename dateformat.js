// correccion de formato de fecha - Urban Collection Store

function formatearFecha(fecha) {
  const date = new Date(fecha);
  const dia = date.getDate().toString().padStart(2, '0');
  const mes = (date.getMonth() + 1).toString().padStart(2, '0');
  const anio = date.getFullYear();
  return dia + '/' + mes + '/' + anio;
}

function mostrarFechaPedido(fecha) {
  const fechaFormateada = formatearFecha(fecha);
  document.getElementById("fecha-pedido").innerText = "Fecha: " + fechaFormateada;
}

// ejemplo de uso
console.log(formatearFecha('2024-01-05')); // 05/01/2024
