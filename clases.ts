/**/
/*

Para hacer una clase abstracta se agrega "ABSTRACT" al principio
abstract class Animal {
  constructor() {
  }

  abstract hacerSonido(): void;
}

El CONSTRUCTOR es un método especial dentro de una clase que se 
utiliza para crear e inicializar objetos de esa clase.
En otros términos, es una función que se ejecuta automáticamente 
al crear una instancia de la clase.
Se utiliza para inicializar los objetos y configurar sus propiedades.

Para hacer una clase con sus clases hijas se usa el extends
despues del nombre de la clase hija
Por ej: class Perro extends Animal{
    constructor() {
    super();
  }
  hacerSonido(): void {
    console.log("¡GUAU, GUAU!");
  }
}

La palabra clave *SUPERr* se utiliza en lenguajes de programación orientados a objetos, 
como Java, C# y TypeScript,
para referirse a la clase padre o superclase. 
Permite acceder y llamar a los miembros de la clase padre desde la clase hija

// Se crea una instancias de las clases.
const perro = new Perro();
const gato = new Gato();

// Para asi llamar al método hacerSonido() de cada instancia y salga
en pantalla.
perro.hacerSonido(); // Salida: El perro hace: ¡Guau!
gato.hacerSonido(); // Salida: El gato hace: ¡Miau!*/