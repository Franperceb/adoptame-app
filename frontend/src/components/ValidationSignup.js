export default function validateSignup(form) {
    let errors = {};
    if (!form.email) {
      errors.email = "Ingresa un email"
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email invalido";
    }
    if (!form.password) {
      errors.password = "Ingresa una contraseña";
    } else if (form.password.length < 6) {
      errors.password = "La contraseña debe ser de 6 o mas caracteres";
    }
    if (!form.firstName) {
        errors.firstName= "Ingrese su nombre";
      } 
    if (!form.lastName) {
        errors.lastName = "Ingrese su Apellido";
      } 
  
    return errors;
  }

  
