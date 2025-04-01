document.addEventListener("DOMContentLoaded", function () {
  dibujarMundo();
  clickearBoton();
  timer();
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var tablero = [
  [
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
  ],
  [
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
  ],
  [
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
  ],
  [
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
  ],
  [
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
    randomInt(0, 1),
  ],
];

const diccionarioTablero = {
  0: "off",
  1: "on",
};
function dibujarMundo() {
  var output = "";
  for (var fila = 0; fila < tablero.length; fila++) {
    output += `<div class="fila" >`;
    for (var x = 0; x < tablero[fila].length; x++) {
      output += `<div class="button ${
        diccionarioTablero[tablero[fila][x]]
      }" data-col="${x}" data-fila="${fila}"></div>`;
    }
    output += "</div>";
  }
  document.getElementById("tablero").innerHTML = output;
}

function clickearBoton() {
  let botones = document.querySelectorAll(".button");

  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      if (this.classList.contains("on")) {
        boton.classList.replace("on", "off");
      } else if (this.classList.contains("off")) {
        boton.classList.replace("off", "on");
      }

      let fila = parseInt(this.getAttribute("data-fila"));
      let col = parseInt(this.getAttribute("data-col"));

      let up = document.querySelector(
        `[data-fila="${fila}"][data-col="${col - 1}"]`
      );
      let right = document.querySelector(
        `[data-fila="${fila + 1}"][data-col="${col}"]`
      );
      let down = document.querySelector(
        `[data-fila="${fila}"][data-col="${col + 1}"]`
      );
      let left = document.querySelector(
        `[data-fila="${fila - 1}"][data-col="${col}"]`
      );

      if (up) {
        if (up.classList.contains("on")) {
          up.classList.replace("on", "off");
        } else if (up.classList.contains("off")) {
          up.classList.replace("off", "on");
        }
      }

      if (right) {
        if (right.classList.contains("on")) {
          right.classList.replace("on", "off");
        } else if (right.classList.contains("off")) {
          right.classList.replace("off", "on");
        }
      }

      if (down) {
        if (down.classList.contains("on")) {
          down.classList.replace("on", "off");
        } else if (down.classList.contains("off")) {
          down.classList.replace("off", "on");
        }
      }

      if (left) {
        if (left.classList.contains("on")) {
          left.classList.replace("on", "off");
        } else if (left.classList.contains("off")) {
          left.classList.replace("off", "on");
        }
      }

      let todosOff = true;
      botones.forEach(function (boton) {
        if (boton.classList.contains("on")) {
          todosOff = false;
        }
      });
      function win() {
        alert("¡Ganaste!")
      }
      if (todosOff) {
        setTimeout(win, 500);
      }
    });
  });  
}

function timer () {
  let tiempo = 0;
  let timer = document.getElementById("timer");

  function contador () {
    tiempo++;
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;
    let horas = Math.floor(tiempo / 3600);
    timer.textContent = `Tiempo: ${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
  }
  setInterval(() => {
    contador()
  }, 1000);
}