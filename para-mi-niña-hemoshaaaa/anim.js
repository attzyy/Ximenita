// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "tarde se me hacia por volver a verte ", time: 37 },
  { text: "mientras tu dormias", time: 48 },
  { text: "visite tu mente", time: 50 },
  { text: "Y el sueño nos reunió en un bosque de cámara lenta", time: 98 },
  { text: "Y un árbol pronunció tu nombre", time: 114 },
  { text: "Ahora solo tú y yo", time: 123 },
  { text: "Y los ojos abiertos", time: 126 },
  { text: "Ahora solo tú y yo", time: 134 },
  { text: "Y nosotros despiertos", time: 137 },
  { text: "Brillas como luna en el camino", time: 143 },
  { text: "Tarde se me hacía por poder tenerte", time: 158 },
  { text: "Mientras tú dormías visité tu mente", time: 208 },
  { text: "Y el sueño nos reunió en un bosque de cámara lenta", time: 219 },
  { text: "Y un árbol pronunció tu nombre", time: 230 },
  { text: "Ahora solo tú y yo", time: 240 },
  { text: "Y los ojos abiertos", time: 242 },
  { text: "Ahora solo tú y yo", time: 251 },
  { text: "Y nosotros despiertos", time: 254 },
  { text: "Brillas como luna en el camino", time: 300 },
  { text: "Pasan las sombras y la memoria busca una solución", time: 325 },
  { text: "Para volverte a ver", time: 330 },
  { text: "Para encontrar tu voz", time: 334 },
  { text: "Pasan las sombras y la memoria busca una solución", time: 336 },
  { text: "Para volverte a ver", time: 342 },
  { text: "Para encontrar tu voz", time: 345 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);