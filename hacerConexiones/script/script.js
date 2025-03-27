document.addEventListener("DOMContentLoaded", function () {
  removeConnections();
});

function removeConnections() {
  let connectionsRequest = document.querySelectorAll(".connection-request").length;
  let buttons = document.querySelectorAll(".accept-btn, .reject-btn");
  let totalRequest = document.querySelector(".connection-requests h2");
  let totalConnections = document.querySelector(".totalConnections");
  let totalConnectionsValue = document.querySelector(".connectionsValue")
  let value = totalConnectionsValue.textContent;
  let connectionsNumber = parseInt(value);

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      connectionsRequest -= 1;
      let connection = this.closest(".connection-request");
      connection.remove();
      if (connectionsRequest > 0) {
        totalRequest.textContent = `Solicitudes de Conexión (${connectionsRequest})`;
      } else if (connectionsRequest == 0) {
        totalRequest.textContent = `No hay Solicitudes de Conexión`;
      }
      if (this.classList.contains("accept-btn")) {
        connectionsNumber += 1
        totalConnections.textContent = `Tus Conexiones (${connectionsNumber})`
      }
    });
  });
}
