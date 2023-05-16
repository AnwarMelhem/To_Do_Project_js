
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Task object constructor
function Task(description, dueDate, priority) {
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.completed = false;
}

// Array to store tasks
const taskList = [];

// Function to add a new task
function addTask() {
  rl.question('Enter task description: ', (description) => {
    rl.question('Enter due date YYYY-MM-DD: ', (dueDate) => {
      rl.question('Enter priority (low=0, medium=1, high=2): ', (priority) => {
        const task = new Task(description, dueDate, priority);
        taskList.push(task);
        console.log('Task added successfully!\n');
       // rl.close();
        showMenu();
      });
    });
  });
}

// Function to list all tasks
function listAllTasks() {
  console.log('All tasks:');
  taskList.forEach((task, index) => {
    console.log(`[${index + 1}] ${task.description} (${task.dueDate}, ${task.priority}) - ${task.completed ? 'Completed' : 'Incomplete'}`);
  });
  console.log();
  showMenu();
}

// Function to list completed tasks
function listCompletedTasks() {
  const completedTasks = taskList.filter(task => task.completed==true);
  console.log('Completed tasks:');
  completedTasks.forEach((task, index) => {
    console.log(`[${index + 1}] ${task.description} (${task.dueDate}, ${task.priority})`);
  });
  console.log();
  showMenu();
}

// Function to mark a task as completed
function markTaskAsCompleted() {
  rl.question('Enter the task number to mark as completed: ', (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < taskList.length) {
      taskList[index].completed = true;
      console.log('Task marked as completed!\n');
    } else {
      console.log('Invalid task number!\n');
    }

    showMenu();
  });
}

// Function to delete a task
function deleteTask() {
 

  rl.question('Enter the task number to delete: ', (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < taskList.length) {
      taskList.splice(index, 1);
      console.log('Task deleted!\n');
    } else {
      console.log('Invalid task number!\n');
    }
    showMenu();
  });
}

// Function to sort tasks by due date
function sortTasksByDueDate() {
  taskList.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  console.log('Tasks sorted by due date!\n');
  taskList.forEach((task, index) => {
    console.log(`[${index + 1}]  ${task.dueDate}) }`);
  });
  showMenu();
}

// Function to sort tasks by priority
function sortTasksByPriority() {
  taskList.sort((a, b) => {
    const priorityMap = { low: 0, medium: 1, high: 2 };
    return priorityMap[a.priority] - priorityMap[b.priority];
    
  });
  console.log('Tasks sorted by priority!\n');
  taskList.forEach((task, index) => {
    console.log(`[${index + 1}]  ${task.priority}) }`);
  });
  showMenu();
}
// Function to clear all tasks
function clearAllTasks() {
taskList.length = 0;
console.log('All tasks cleared!\n');
showMenu();
}

// Function to show the menu
function showMenu() {
console.log('');
console.log('Welcome to JS TODO-APP');
console.log('');
console.log('Select an action:');
console.log('1) Add a new task');
console.log('2) List all tasks');
console.log('3) List completed tasks');
console.log('4) Mark a task as completed');
console.log('5) Delete a task');
console.log('6) Sort tasks by due date');
console.log('7) Sort tasks by priority');
console.log('8) Clear all tasks');
console.log('***************************');
console.log('Whats your choice?');

rl.question('', (choice) => {
console.log();
switch (choice) {
case '1':
addTask();
break;
case '2':
listAllTasks();
break;
case '3':
listCompletedTasks();
break;
case '4':
markTaskAsCompleted();
break;
case '5':
deleteTask();
break;
case '6':
sortTasksByDueDate();
break;
case '7':
sortTasksByPriority();
break;
case '8':
clearAllTasks();
break;
default:
console.log('Invalid choice!\n');
showMenu();
break;
}
});
}

// Start the app by showing the menu
showMenu();
