let todoList = [];

// Function to access input field
const todoInput = document.querySelector("#todo-input").value;
console.log(todoInput);

// Listining to the click event
document
  .querySelector("#addTodoItem")
  .addEventListener("click", function (event) {
    // Prevent page from reloading on form submission
    event.preventDefault();

    // Get data from input field
    const todoInputData = document.querySelector("#todo-input").value.trim();
    if (todoInputData === "") {
      alert("Please enter a todo item");
      return;
    }
    console.log(todoInputData);
    todoList.push(todoInputData);
    console.log(todoList);

    // Create a list item
    const ListItem = document.createElement("li");
    ListItem.innerHTML = `<input type="checkbox" /> <span>${todoInputData}</span> <button class="deleteTodoItem">X</button>`;
    console.log(ListItem);

    // Add todo item to the list
    document.querySelector(".todo-list").appendChild(ListItem);

    // Clear input field
    document.querySelector("#todo-input").value = "";

    // Mark todo item as done
    ListItem.querySelector("input[type=checkbox]").addEventListener(
      "change",
      function () {
        if (this.checked) {
          ListItem.classList.add("done");
        } else {
          ListItem.classList.remove("done");
        }
      }
    );

    // Remove todo item from the list
    ListItem.querySelector(".deleteTodoItem").addEventListener(
      "click",
      function () {
        document.querySelector(".todo-list").removeChild(ListItem);
      }
    );

    // Clear all todo items
    document.querySelector("#clearAll").addEventListener("click", function () {
      document.querySelector(".todo-list").innerHTML = "";
    });
  });
