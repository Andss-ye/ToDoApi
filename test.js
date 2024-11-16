import todoService from "./models/todoService.js";

// Probar las funcionalidades del servicio
async function testTodoService() {
  console.log("=== Probando `todoService` ===");

  // Crear un nuevo todo
  console.log("\nCreando un nuevo todo...");
  const newTodo = todoService.createTodo("Aprender Node.js", "Estudiar los módulos y el sistema de archivos");
  console.log("Nuevo todo creado:", newTodo);

  // Obtener todos los todos
  console.log("\nObteniendo todos los todos...");
  const todos = todoService.getData();
  console.log("Todos actuales:", todos);

  // Actualizar un todo
  console.log("\nActualizando un todo...");
  const updatedTodo = todoService.updateTodo({
    id: newTodo.id,
    name: "Aprender Node.js avanzado",
  });
  console.log("Todo actualizado:", updatedTodo);

  // Eliminar un todo
  console.log("\nEliminando un todo...");
  todoService.deleteTodo(newTodo.id);
  console.log(`Todo con ID ${newTodo.id} eliminado.`);
  
  // Ver todos después de la eliminación
  const todosAfterDeletion = todoService.getData();
  console.log("\nTodos actuales después de la eliminación:", todosAfterDeletion);
}

// Ejecutar la prueba
testTodoService().catch((err) => console.error("Error:", err));
