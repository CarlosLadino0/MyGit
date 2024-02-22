// Ejercicio 2
function fabricarRegalos(regalos, materiales) {
    // Convertir los materiales disponibles en un conjunto
    const materialesSet = new Set(materiales);
  
    // Función para verificar si un regalo se puede fabricar
    function sePuedeFabricar(regalo) {
      // Convertir el regalo en un conjunto
      const regaloSet = new Set(regalo);
  
      // Regresar true si todos los materiales del regalo están en el conjunto de materiales disponibles
      return Array.from(regaloSet).every(function (material) {
        return materialesSet.has(material);
      });
    }
  
    // Filtrar la lista de regalos y devolver solo los que se pueden fabricar
    return regalos.filter(sePuedeFabricar);
  }
  
  // Ejemplos de uso
  const regalos = ["tren", "oso", "pelota"];
  const materiales = "tronesa";
  
  const regalosFabricables = fabricarRegalos(regalos, materiales);
  
  console.log(regalosFabricables); // Salida: ["tren", "oso"]
  
  // Más ejemplos
  const regalos2 = ["juego", "puzzle"];
  const materiales2 = "jlepuz";
  
  const regalosFabricables2 = fabricarRegalos(regalos2, materiales2);
  
  console.log(regalosFabricables2); // Salida: ["puzzle"]
  
  const regalos3 = ["libro", "ps5"];
  const materiales3 = "psli";
  
  const regalosFabricables3 = fabricarRegalos(regalos3, materiales3);
  
  console.log(regalosFabricables3); // Salida: []
  
  // Ejercicio 3

  function encontrarPasoTravieso(original, modificada) {
    // Si las secuencias son iguales, no hay paso travieso
    if (original === modificada) {
      return "";
    }
  
    // Obtener la longitud de la secuencia más corta
    const longitudMinima = Math.min(original.length, modificada.length);
  
    // Recorrer las secuencias caracter por caracter hasta encontrar una diferencia
    for (let i = 0; i < longitudMinima; i++) {
      if (original[i] !== modificada[i]) {
        // Si la secuencia original es más larga, el paso travieso es el siguiente caracter en la modificada
        if (original.length > modificada.length) {
          return modificada[i];
        }
        // Si la secuencia modificada es más larga, el paso travieso es el caracter que falta en la original
        return "";
      }
    }
  
    // Si no se encontró ninguna diferencia, el paso travieso es el caracter adicional al final de la secuencia modificada
    if (modificada.length > original.length) {
      return modificada[longitudMinima];
    }
  
    // Si se llegó aquí, no se encontró ningún paso travieso
    return "";
  }
  
  // Ejemplos de uso
  const original = "abcd";
  const modificada = "abcde";
  
  const pasoTravieso = encontrarPasoTravieso(original, modificada);
  
  console.log(pasoTravieso); // Salida: "e"
  
  // Más ejemplos
  const original2 = "stepfor";
  const modificada2 = "stepor";
  
  const pasoTravieso2 = encontrarPasoTravieso(original2, modificada2);
  
  console.log(pasoTravieso2); // Salida: "f"
  
  const original3 = "abcde";
  const modificada3 = "abcde";
  
  const pasoTravieso3 = encontrarPasoTravieso(original3, modificada3);
  
  console.log(pasoTravieso3); // Salida: ""
  
  // Ejercicio 6

  function maxDistance(movimientos) {
    // Variables para almacenar la posición actual y la máxima distancia
    let posicionActual = 0;
    let distanciaMaxima = 0;
  
    // Recorrer la cadena de movimientos
    for (const movimiento of movimientos) {
      // Actualizar la posición actual según el movimiento
      switch (movimiento) {
        case ">":
          posicionActual++;
          break;
        case "<":
          posicionActual--;
          break;
      }
  
      // Actualizar la distancia máxima si la posición actual es mayor
      distanciaMaxima = Math.max(distanciaMaxima, Math.abs(posicionActual));
    }
  
    // Devolver la distancia máxima
    return distanciaMaxima;
  }
  
  // Ejemplos de uso
  const movimientos = ">>*<>";
  const result = maxDistance(movimientos);
  
  console.log(result); // Salida: 2
  
  const movimientos2 = "<<<>";
  const result2 = maxDistance(movimientos2);
  
  console.log(result2); // Salida: 2
  
  const movimientos3 = ">***>";
  const result3 = maxDistance(movimientos3);
  
  console.log(result3); // Salida: 5
  
  // Ejercicio 10

  function crearArbolNavidad(adornos, altura) {
    // Convertir la cadena de adornos en un array
    const adornosArray = adornos.split("");
  
    // Calcular la longitud máxima de una línea del árbol
    const longitudMaximaLinea = (2 * altura) - 1;
  
    // Función para generar una línea del árbol
    function generarLinea(nivel) {
      let linea = "";
      const espaciosIzquierda = Math.floor((longitudMaximaLinea - linea.length) / 2);
      const adornosLinea = adornosArray.slice(nivel * 2, (nivel * 2) + 2);
  
      linea += " ".repeat(espaciosIzquierda);
      linea += adornosLinea.join(" ");
  
      return linea;
    }
  
    // Generar las líneas del árbol
    let arbol = "";
    for (let i = 0; i < altura; i++) {
      arbol += generarLinea(i) + "\n";
    }
  
    // Agregar el tronco del árbol
    arbol += " ".repeat(Math.floor(longitudMaximaLinea / 2)) + "|\n";
  
    return arbol;
  }
  
  // Ejemplos de uso
  const adornos = "123";
  const altura = 4;
  
  const arbolNavidad = crearArbolNavidad(adornos, altura);
  
  console.log(arbolNavidad);

  
  const adornos2 = "*@o";
  const altura2 = 3;
  
  const arbolNavidad2 = crearArbolNavidad(adornos2, altura2);
  
  console.log(arbolNavidad2);
  

  

