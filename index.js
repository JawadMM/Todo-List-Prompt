let userInput = prompt("What would you like to do?");

const todos = [];

while (userInput.toLowerCase() !== "quit" && userInput !== "q") {
  if (userInput.toLocaleLowerCase() === "list") {
    console.log("*********");

    for (let i = 0; i < todos.length; i++) {
      console.log(`${i + 1}: ${todos[i]}`);
    }
    console.log("*********");
  } else if (userInput.toLowerCase() === "new") {
    let newTask = prompt("Enter a task to add:");
    todos.push(newTask);
    console.log("Task has been added successfully!");
  } else if (userInput.toLocaleLowerCase() === "delete") {
    let indexToDelete = parseInt(
      prompt("Enter the index of the task you want to delete:")
    );

    if (!Number.isNaN(indexToDelete)) {
      todos.pop(indexToDelete - 1);
      console.log("Task has been removed successfully!");
    } else {
      console.log("Unknown Index");
    }
  }
  userInput = prompt("What would you like to do?");
}

console.log("QUITTING THE APP");
