let tareas = new ListaTareas();
tareas.agregarTarea("Estudiar estructuras de datos");
tareas.agregarTarea("Completar tarea de programación");
tareas.agregarTarea("Hacer ejercicio");

tareas.mostrarTareas();
tareas.completarTarea(); // Elimina la primera tarea
tareas.mostrarTareas();

//hacer las modificaciones solicitadas en clase