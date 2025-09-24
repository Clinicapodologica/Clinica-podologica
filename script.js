function abrirWhatsApp() {
  let telefono = "5215512345678"; // cámbialo por el número real
  let mensaje = "Hola, quiero agendar una cita en la Clínica de Podología.";
  let url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}