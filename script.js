// Copia el correo al portapapeles y confirma la acción.
(function () {
  var btn = document.getElementById("copy");
  var status = document.getElementById("copy-status");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var email = btn.dataset.email;
    var done = function (msg) {
      status.textContent = msg;
      setTimeout(function () { status.textContent = ""; }, 2500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(
        function () { done("Correo copiado"); },
        function () { done("No se pudo copiar. Escribe a " + email); }
      );
    } else {
      done("Escribe a " + email);
    }
  });
})();