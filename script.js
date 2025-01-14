// Empty array to store todo items
// let todoList = [];

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
    // todoList.push(todoInputData);
    // console.log(todoList);

    // Get data from label field
    const todoLabelData = document.querySelector("#label-input").value.trim();
    if (todoLabelData === "") {
      alert("Please enter a label");
      return;
    }
    console.log(todoLabelData);

    // Get data from color picker field
    const labelColor = document.querySelector("#color-input").value;

    // Create a list item
    const ListItem = document.createElement("li");
    ListItem.innerHTML = `<input type="checkbox" class="checkTodoItem"/> <span class="task">${todoInputData}</span><span class="label" style="background-color:${labelColor}">${todoLabelData}</span> <button class="deleteTodoItem">X</button>`;
    console.log(ListItem);

    // Add todo item to the list
    document.querySelector(".todo-list").appendChild(ListItem);

    // Clear input field
    document.querySelector("#todo-input").value = "";
    document.querySelector("#label-input").value = "";

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
