import NodoTarea from "./NodoTarea.js";

class ListaTareas {
  constructor() {
    this.cabeza = null;
  }

  agregarTarea(tarea) {
    let nuevoNodo = new NodoTarea(tarea);
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
    }
    console.log(`Tarea agregada: ${tarea}`);
  }

  completarTarea() {
    if (!this.cabeza) {
      console.log("No hay tareas pendientes.");
      return;
    }
    console.log(`Completando tarea: ${this.cabeza.tarea}`);
    this.cabeza = this.cabeza.siguiente;
  }

  mostrarTareas() {
    let actual = this.cabeza;
    console.log("Tareas pendientes:");
    while (actual) {
      console.log("- " + actual.tarea);
      actual = actual.siguiente;
    }
  }
}

export default ListaTareas;