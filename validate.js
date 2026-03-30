// validaciones del formulario de Urban Collection Store

function validarNombre(nombre) {
  if (nombre == "") {
    alert("El nombre no puede estar vacio");
    return false;
  }
  return true;
}

function validarEmail(email) {
  if (email == "" || !email.includes("@")) {
    alert("El email no es valido");
    return false;
  }
  return true;
}

function validarPassword(password) {
  if (password.length < 6) {
    alert("La password debe tener minimo 6 caracteres");
    return false;
  }
  return true;
}

function validarFormulario(nombre, email, password) {
  if (validarNombre(nombre) && validarEmail(email) && validarPassword(password)) {
    alert("Formulario enviado correctamente!");
    return true;
  }
  return false;
}
