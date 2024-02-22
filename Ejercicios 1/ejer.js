// Ejercicio 1
function contrasenaValida(contrasena) {
    // Verificar si el string es igual a una de las contraseñas válidas
    if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
      console.log("Contraseña válida");
      return true;
    } else {
      console.log("Contraseña inválida");
      return false;
    }
  }
  
  // Probar la función con diferentes contraseñas
  contrasenaValida("2Fj(jjbFsuj"); 
  contrasenaValida("123456"); 
  contrasenaValida("eoZiugBf&g9"); 

  // Ejercicios 2

  function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
      return ingresos * 0.4;
    } else {
      return 0;
    }
  }

  const edad1 = 18;
  const ingresos1 = 1500;
  const edad2 = 17;
  const ingresos2 = 800;
  
  console.log(calcularImpuestos(edad1, ingresos1)); 
  console.log(calcularImpuestos(edad2, ingresos2)); 

  // Ejercicio 3

  function bmi(peso, altura) {
    // Calcular el IMC
    const imc = peso / (altura * altura);
  
    // Mostrar la clasificación según el IMC
    if (imc < 18.5) {
      console.log("Bajo de peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
      console.log("Normal");
    } else if (imc >= 25 && imc <= 29.9) {
      console.log("Sobrepeso");
    } else {
      console.log("Obeso");
    }
  
    return imc;
  }
  
  // Probar la función con diferentes pesos y alturas
  bmi(70, 1.7); // Salida: "Normal"
  bmi(80, 1.6); // Salida: "Sobrepeso"
  bmi(50, 1.5); // Salida: "Bajo de peso"
  bmi(100, 1.8); // Salida: "Obeso"
  

  // Ejercicio 4
  function imprimirArreglo(arreglo) {
    // Recorrer el arreglo elemento por elemento
    for (let i = 0; i < arreglo.length; i++) {
      // Imprimir cada elemento en una línea separada
      console.log(arreglo[i]);
    }
  }
  
  // Ejemplo de uso
  const frutas = ["Manzana", "Naranja", "Plátano", "Fresa"];
  imprimirArreglo(frutas);
  
  // Ejercicio 5

  function likes(numero) {
    // Convertir el número a una cadena
    const numStr = numero.toString();
  
    // Si el número es menor a 1000, devolver la cadena directamente
    if (numero < 1000) {
      return numStr;
    }
  
    // Formatear el número con K o M
    if (numero >= 1000 && numero < 1000000) {
      const miles = Math.floor(numero / 1000);
      return miles + "K";
    } else {
      const millones = Math.floor(numero / 1000000);
      return millones + "M";
    }
  }
  
  // Ejemplos de uso
  console.log(likes(1400)); // Salida: "1K"
  console.log(likes(34567)); // Salida: "34K"
  console.log(likes(7456345)); // Salida: "7M"
  console.log(likes(999)); // Salida: "999"
  

  // Ejercicio 7

  function contarRango(numeroInicial, numeroFinal) {
    // Validar que el primer número sea menor que el segundo
    if (numeroInicial >= numeroFinal) {
      throw new Error("El primer número debe ser menor que el segundo");
    }
  
    // Contador para los números entre el rango
    let contador = 0;
  
    // Recorrer el rango desde el siguiente número al inicial hasta el final
    for (let i = numeroInicial + 1; i < numeroFinal; i++) {
      // Incrementar el contador en cada iteración
      contador++;
    }
  
    // Devolver el número de números encontrados
    return contador;
  }
  
  // Ejemplos de uso
  console.log(contarRango(1, 5)); // Salida: 3
  console.log(contarRango(10, 20)); // Salida: 9
  console.log(contarRango(5, 5)); // Salida: 0
  
  // Ejemplo con error
  try {
    contarRango(10, 5);
  } catch (error) {
    console.log(error.message); // Salida: "El primer número debe ser menor que el segundo"
  }
  

  // Ejercicio 10

  function numeroDeCaracteres(texto, caracter) {
    // Validar que el caracter tenga solo un caracter
    if (caracter.length !== 1) {
      throw new Error("El caracter debe ser un solo caracter");
    }
  
    // Convertir el texto a minúsculas para evitar problemas de sensibilidad a mayúsculas y minúsculas
    const textoMinusculas = texto.toLowerCase();
  
    // Convertir el caracter a minúsculas
    const caracterMinuscula = caracter.toLowerCase();
  
    // Contar la cantidad de apariciones del caracter en el texto
    let contador = 0;
    for (let i = 0; i < textoMinusculas.length; i++) {
      if (textoMinusculas[i] === caracterMinuscula) {
        contador++;
      }
    }
  
    // Devolver el número de apariciones del caracter
    return contador;
  }
  
  // Ejemplos de uso
  console.log(numeroDeCaracteres("Hola mundo", "o")); // Salida: 2
  console.log(numeroDeCaracteres("Hola mundo", "a")); // Salida: 1
  console.log(numeroDeCaracteres("Hola mundo", "H")); // Salida: 1
  
  // Ejemplo con error
  try {
    numeroDeCaracteres("Hola mundo", "Hola");
  } catch (error) {
    console.log(error.message); // Salida: "El caracter debe ser un solo caracter"
  }
  
// Ejercicio 11

function sumarArreglo(arreglo) {
    // Validar que el arreglo no esté vacío
    if (arreglo.length === 0) {
      throw new Error("El arreglo no puede estar vacío");
    }
  
    // Variable para almacenar la suma
    let suma = 0;
  
    // Recorrer el arreglo y sumar cada elemento
    for (let i = 0; i < arreglo.length; i++) {
      // Validar que cada elemento del arreglo sea un número
      if (typeof arreglo[i] !== "number") {
        throw new Error("El arreglo solo puede contener números");
      }
      suma += arreglo[i];
    }
  
    // Devolver la suma total
    return suma;
  }
  
  // Ejemplos de uso
  console.log(sumarArreglo([1, 2, 3])); // Salida: 6
  console.log(sumarArreglo([10, 20, 30, 40])); // Salida: 100
  
  // Ejemplos con errores
  try {
    sumarArreglo([]);
  } catch (error) {
    console.log(error.message); // Salida: "El arreglo no puede estar vacío"
  }
  
  try {
    sumarArreglo(["a", 2, 3]);
  } catch (error) {
    console.log(error.message); // Salida: "El arreglo solo puede contener números"
  }
  
  // Ejercicio 13

  function removerCeros(arreglo) {
    // Crear un nuevo arreglo para almacenar los elementos sin ceros
    const nuevoArreglo = [];
  
    // Recorrer el arreglo original
    for (let i = 0; i < arreglo.length; i++) {
      // Si el elemento actual no es un cero, agregarlo al nuevo arreglo
      if (arreglo[i] !== 0) {
        nuevoArreglo.push(arreglo[i]);
      }
    }
  
    // Devolver el nuevo arreglo sin ceros
    return nuevoArreglo;
  }
  
  // Ejemplos de uso
  console.log(removerCeros([1, 0, 2, 3, 0])); // Salida: [1, 2, 3]
  console.log(removerCeros([0, 0, 0, 0])); // Salida: []
  
  // Ejemplo con un arreglo vacío
  console.log(removerCeros([])); // Salida: []
  

  // Ejercicio 21

  function pares(arreglo) {
    // Crear un nuevo arreglo para almacenar los números pares
    const numerosPares = [];
  
    // Recorrer el arreglo original
    for (let i = 0; i < arreglo.length; i++) {
      // Si el elemento actual es par, agregarlo al nuevo arreglo
      if (arreglo[i] % 2 === 0) {
        numerosPares.push(arreglo[i]);
      }
    }
  
    // Devolver el nuevo arreglo con los números pares
    return numerosPares;
  }
  
  // Ejemplos de uso
  console.log(pares([1, 2, 3, 4, 5])); // Salida: [2, 4]
  console.log(pares([10, 15, 20, 25])); // Salida: [10, 20]
  
  // Ejemplo con un arreglo vacío
  console.log(pares([])); // Salida: []
  

  // Ejercicio 26

  function imprimirMatriz(matriz) {
    // Recorrer cada fila de la matriz
    for (let i = 0; i < matriz.length; i++) {
      // Imprimir cada elemento de la fila actual
      for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
      }
      // Agregar un salto de línea al final de cada fila
      console.log("\n");
    }
  }
  
  // Ejemplo de uso
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  imprimirMatriz(matriz);
  

  // Ejercicio 31

  function distancia(str1, str2) {
    // Validar que los strings tengan la misma longitud
    if (str1.length !== str2.length) {
      throw new Error("Los strings deben tener la misma longitud");
    }
  
    // Variable para almacenar la distancia
    let distancia = 0;
  
    // Recorrer los strings caracter por caracter
    for (let i = 0; i < str1.length; i++) {
      // Si los caracteres actuales son diferentes, aumentar la distancia
      if (str1[i] !== str2[i]) {
        distancia++;
      }
    }
  
    // Devolver la distancia total
    return distancia;
  }
  
  // Ejemplos de uso
  console.log(distancia("Hola", "Hala")); // Salida: 1
  console.log(distancia("Hola mundo", "Hola mundo")); // Salida: 0
  
  // Ejemplo con error
  try {
    distancia("Hola", "Hola mundo");
  } catch (error) {
    console.log(error.message); // Salida: "Los strings deben tener la misma longitud"
  }
  

