//bring in elements from todo list
const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUL = document.getElementById('todos');
console.log(todoUL);

form.addEventListener('submit', (e) => {
    //prevents default form submit behavior
    e.preventDefault();
    //executes addTodo on submit
    addTodo()
});

function addTodo(todo) {
    //saving the input value of text to a variable
    let todoText = input.value;
    //if a todo exists
    if (todo) {
        todoText = todo.text;
    }
    // console.log(todoText);

    //if the text exists
    if (todoText) {
        //creates a new list item
        const todoEL = document.createElement('li');

        if (todo && todo.completed) {
            todo.classList.add('completed');
        }
        //make the text of li same as input value
        todoEL.innerText = todoText;
        //append the todo list item to the todo unordered list
        todoUL.appendChild(todoEL);
        //clears input box after enter
        input.value = ' ';

        todoEL.addEventListener('click', () => {
            todoEL.classList.toggle('completed');
        });

        todoEL.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            //remove list item with right click (context menu)
            todoEL.remove();
        });
    }
}