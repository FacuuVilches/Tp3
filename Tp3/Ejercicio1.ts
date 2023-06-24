/*Inicializar un proyecto de nodejs configurado para TypesCript
ejercicio 1 crear una clase abstracta llamada Animal y dos clases hijas llamadas Perro y Gato que extiendan la clase Animal. 
Cada una de las clases hijas debe implementar el método hacerSonido() de forma diferente.*/

abstract class Animal {
  constructor() {
  }

  abstract hacerSonido(): void;
}

class Perro extends Animal{
  constructor() {
    super();
  }
  hacerSonido(): void {
    console.log("¡GUAU, GUAU!");
  }
}

class Gato extends Animal {
  constructor() {
    super();
  }
  hacerSonido(): void {
    console.log("¡MIAU, MIAU!")
  }
}
