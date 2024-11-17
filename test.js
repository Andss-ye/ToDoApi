import todoService from "./models/todoService.js";

async function testTodoService() {
  try {
    console.log("=== Probando `todoService` ===");

    // Crear un nuevo todo
    console.log("\nCreando un nuevo todo...");
    const newTodo = await todoService.createTodo(
      "Aprender Node.js",
      "Estudiar los módulos y el sistema de archivos"
    );
    console.log("Nuevo todo creado:", newTodo);

    // Obtener todos los todos
    console.log("\nObteniendo todos los todos...");
    const todos = await todoService.getData();
    console.log("Todos actuales:", todos);

    // Actualizar un todo
    console.log("\nActualizando un todo...");
    const updatedTodo = await todoService.updateTodo({
      id: newTodo.id,
      name: "Aprender Node.js avanzado",
    });
    console.log("Todo actualizado:", updatedTodo);

    // Eliminar un todo
    console.log("\nEliminando un todo...");
    await todoService.deleteTodo(newTodo.id);
    console.log(`Todo con ID ${newTodo.id} eliminado.`);

    // Ver todos después de la eliminación
    const todosAfterDeletion = await todoService.getData();
    console.log("\nTodos actuales después de la eliminación:", todosAfterDeletion);

    console.log("\nObteniendo todos los todos despues de la eliminación...");
    const newTodos = await todoService.getData();
    console.log("Todos actuales:", newTodos);
    
  } catch (err) {
    console.error("Error:", err.message);
  }
}

// Ejecutar la prueba
testTodoService();
