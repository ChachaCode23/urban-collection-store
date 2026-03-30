// simulacion de pago - Urban Collection Store

function procesarPago(nombre, numeroTarjeta, monto) {
  if (nombre == "") {
    alert("El nombre del titular es requerido");
    return false;
  }

  if (numeroTarjeta.length != 16) {
    alert("El numero de tarjeta debe tener 16 digitos");
    return false;
  }

  if (monto <= 0) {
    alert("El monto debe ser mayor a 0");
    return false;
  }

  // simulacion de respuesta del pago
  alert("Pago procesado correctamente! Monto: $" + monto);
  return true;
}

function mostrarResumenPago(producto, precio) {
  document.getElementById("producto").innerText = producto;
  document.getElementById("precio").innerText = "$" + precio;
}
