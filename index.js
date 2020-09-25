// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, desc) {
  // taskTitles.push(title);
  // taskComplete.push(false);
  // taskDescriptions.push(desc);
  const task = {
    title: title,
    description: desc,
    complete: false,
    markCompleted: function() {
      this.complete = true;
    },
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  }
  return task
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Go to the laundry room and clean the litter."); // task 0
const task2 = newTask("Do Laundry", "Make sure to separate into like colors and wash on cold."); // task 1
const tasks = [task1, task2];
// console.log(tasks);
task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logTaskState(); // Clean Cat Litter has been completed
