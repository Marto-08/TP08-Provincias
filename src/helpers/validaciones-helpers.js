export const validarNombre = (name) => {
  if (name === undefined || name === null) {
    return "El campo name es obligatorio.";
  }

  if (typeof name !== "string" || !name.trim().length) {
    return "El campo name debe ser un texto no vacío.";
  }

  if (name.trim().length < 3) {
    return "El campo name debe tener al menos 3 caracteres.";
  }

  return null;
};

export const validarFullName = (full_name) => {
  if (full_name === undefined || full_name === null) {
    return "El campo full_name es obligatorio.";
  }

  if (typeof full_name !== "string" || !full_name.trim().length) {
    return "El campo full_name debe ser un texto no vacío.";
  }

  return null;
};

export const validarNumero = (value, fieldName) => {
  if (value === undefined || value === null) {
    return `El campo ${fieldName} es obligatorio.`;
  }

  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    return `El campo ${fieldName} debe ser un número válido.`;
  }

  return null;
};

export const validarProvincia = (province, requireId = false) => {
  const errores = [];

  if (requireId) {
    if (province.id === undefined || province.id === null) {
      errores.push("El campo id es obligatorio.");
    } else if (Number.isNaN(Number(province.id))) {
      errores.push("El campo id debe ser un número válido.");
    }
  }

  const nombreError = validarNombre(province.name);
  if (nombreError) errores.push(nombreError);

  const fullNameError = validarFullName(province.full_name);
  if (fullNameError) errores.push(fullNameError);

  const latitudeError = validarNumero(province.latitude, "latitude");
  if (latitudeError) errores.push(latitudeError);

  const longitudeError = validarNumero(province.longitude, "longitude");
  if (longitudeError) errores.push(longitudeError);

  const displayOrderError = validarNumero(province.display_order, "display_order");
  if (displayOrderError) errores.push(displayOrderError);

  return errores;
};
