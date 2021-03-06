// Buscando el numero de codigo del teclado
/*document.addEventListener("keyup", tecla);
function tecla(evento){
  console.log(evento);
}*/

// convertir un codigo de teclado a un caracter

// FromCharCode posible solucion

// String.fromCharCode = Convierte un número Unicode en un carácter
// Para que solo permita numeros y otros caracteres especiales
function numero_valido(c){
  codigo = c.keyCode || c.wich;
  tecla = String.fromCharCode(codigo);
  numeros = '0123456789';
// Botones especiales
//  Izquierda = 37 , Derecha = 39 , Borrar uno = 8 ,SuprimirTodo = 46
  otros = '37-39-8-46';
  teclas_especiales = false;

// Dando funcionalidad a las teclas especiales para habilitar el valor de la variable "otros"
  for (var i in otros){
    if(codigo == otros[i]){
      teclas_especiales = true;
    }
  }
  if(numeros.indexOf(tecla)==-1 && !teclas_especiales){
    return false;
  }
}

// Pasando el dato de un boton a la casilla del input

function enviar_valor(num){
  var valor_num = document.botones.dato.value;
  //console.log(valor_num.value);
  //alert(valor_num)
  document.getElementById("dato").value = valor_num + num;

}

// **** Dando funcionalidad a las variables de operabilidad ****

// Codigo para eliminar solo un valor numerico del input
function borrar(){
  var anterior = document.botones.dato.value;
  //alert(anterior.length-1) ;
  // método substring () devuelve una nueva cadena que es una subcadena de una cadena dada.
  var nuevo = anterior.substring(0, anterior.length-1);
  document.getElementById('dato').value = nuevo;
}

// Codigo para eliminar todos los numeros del input
function borrar_todo(){
  document.botones.dato.value = "";
}

// Codigo para operaciones matematicas
// Codigo para no repetir el mismo operador matematico
// Codigo para obtener el resultado de la operacion matematica
