// When the ring buffer is full and a new element is inserted,
// the oldest element in the ring buffer is overwritten with the newest element.
// This kind of data structure is very useful for use cases such as storing logs
// and history information, where you typically want to store information up until
// it reaches a certain age, after which you don't care about it anymore and don't
// mind seeing it overwritten by newer data.

// Implement this behavior in the RingBuffer class. RingBuffer has two methods,
// append and allValues. The append method adds elements to the buffer. The allValues
// method returns all of the elements in the buffer ordered from oldest to newest. In
// other words, least-recently added elements first, then most-recently added elements.

class RingBuffer {
  // Crear una clase donde pasamos la capacidad al constructor
  constructor(capacity) {
    //   Agregamos propiedades necesarias del constructor
    this.capacity = capacity;
    this.current = 0;
    this.storage = [];
  }

  // Método para agregar articulos al almacén o array
  append(item) {
    //   el siguiente artículo/item dentro del array se convierte en el artículo que pasamos como parámetro
    this.storage[this.current++] = item;
    // current está señalando al último artículo en el array
    // cuando current es igual a la capacidad de almacenamiento, comienza en 0 otra vez
    if (this.current === this.capacity) {
      this.current = 0;
    }
    // Ya que current es igual a 0, se comienza el ciclo otra vez
    // El siguiente articulo agregado reemplazará al primer item en el array
    // y asi sucesivamente
  }

  allValues() {
    return this.storage;
  }
}

const ringBuffer = new RingBuffer(3);
ringBuffer.append("a");
console.log(ringBuffer.capacity);
console.log(ringBuffer.current);
console.log(ringBuffer.storage);
ringBuffer.append("b");
console.log(ringBuffer.capacity);
console.log(ringBuffer.current);
console.log(ringBuffer.storage);
ringBuffer.append("c");
console.log(ringBuffer.capacity);
console.log(ringBuffer.current);
console.log(ringBuffer.storage);
ringBuffer.append("d");
console.log(ringBuffer.capacity);
console.log(ringBuffer.current);
console.log(ringBuffer.storage);
ringBuffer.append("e");
console.log(ringBuffer.capacity);
console.log(ringBuffer.current);
console.log(ringBuffer.storage);
console.log(ringBuffer.allValues());
