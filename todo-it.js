var TodoList = /** @class */ (function () {
    function TodoList(todoList) {
        this._todoList = [];
        // first we make sure that we have received a valid array
        if (Array.isArray(todoList) && todoList.length) {
            this._todoList = this._todoList.concat(todoList);
        }
    }
    Object.defineProperty(TodoList.prototype, "todoList", {
        get: function () {
            return this._todoList;
        },
        enumerable: true,
        configurable: true
    });
    TodoList.prototype.addTodo = function (todoItem) {
        if (todoItem) {
            // the value is "truthy":
            // not null, not undefined, not NaN, not an empty string,
            // not 0, not false
            this._todoList = this._todoList.concat(todoItem);
        }
    };
    TodoList.prototype.removeTodo = function (itemId) {
        if (itemId) {
            this._todoList = this._todoList.filter(function (item) {
                if (item.identifier === itemId) {
                    return false; // drop
                }
                else {
                    return true; // keep
                }
            });
        }
    };
    return TodoList;
}());
var HTMLTodoListView = /** @class */ (function () {
    function HTMLTodoListView() {
        this.view = new HTMLTodoListView();
        this.todoInput = document.getElementById('todoInput');
        this.todoListDiv = document.getElementById('todoListContainer');
        this.todoListFilter = document.getElementById('todoFilter');
        // defensive checks
        if (!this.todoInput) {
            throw new Error("Could not find the todoInput HTML input element. Is the HTML correct?");
        }
        if (!this.todoListDiv) {
            throw new Error("Could not find the todoListContainer HTML div. Is the HTML correct?");
        }
        if (!this.todoListFilter) {
            throw new Error("Could not find the todoFilter HTML input element. Is the HTML correct?");
        }
    }
    HTMLTodoListView.prototype.clearInput = function () {
        this.todoInput.value = '';
    };
    HTMLTodoListView.prototype.getFilter = function () {
        return this.todoListFilter.value.toUpperCase();
    };
    HTMLTodoListView.prototype.getInput = function () {
        var todoInputValue = this.todoInput.value.trim();
        var retVal = new TodoItem(todoInputValue);
        return retVal;
    };
    HTMLTodoListView.prototype.render = function (todoList) {
        // TODO
    };
    HTMLTodoListView.prototype.filter = function () {
        // TODO
    };
    return HTMLTodoListView;
}());
render(todoList, ReadonlyArray(), void {
    console: console, : .log("Updating the rendered todo list"),
    "this": .todoListDiv.innerHTML = '',
    "this": .todoListDiv.textContent = '',
    "const": ul = document.createElement('ul'),
    URL: URL, : .setAttribute('id', 'todoList'),
    "this": .todoListDiv.appendChild(ul),
    TodoList: TodoList, : .forEach(function (item) {
        var li = document.createElement('li');
        li.setAttribute('class', 'todo-list-item');
        li.innerHTML = "<a href='#' onclick='todoIt.removeTodo(\"" + item.identifier + "\")'>" + item.description + "</a>";
        ul.appendChild(li);
    })
}, filter(), void {
    console: console, : .log("Filtering the rendered todo list"),
    "const": todoListHtml, HTMLUListElement: HTMLUListElement,
    "if": function (todoListHtml) { }
} == null);
{
    console.log("Nothing to filter");
    return;
}
var todoListFilterText = this.getFilter();
todoListHtml.childNodes.forEach(function (item) {
    var itemText = item.textContent;
    if (itemText !== null) {
        itemText = itemText.toUpperCase();
        if (itemText.startsWith(todoListFilterText)) {
            item.style.display = "list-item";
        }
        else {
            item.style.display = "none";
        }
    }
});
var TodoIt = /** @class */ (function () {
    function TodoIt(_todoListView) {
        this._todoListView = _todoListView;
        this._todoList = new TodoList();
        this.todoIt = new TodoIt(view);
        console.log("TodoIt");
        if (!_todoListView) {
            throw new Error("The todo list view implementation is required to properly initialize TodoIt!");
        }
    }
    TodoIt.prototype.addTodo = function () {
        // get the value from the view
        var newTodo = this._todoListView.getInput();
        // verify that there is something to add
        if ('' !== newTodo.description) {
            console.log("Adding todo: ", newTodo);
            // add the new item to the list (i.e., update the model)
            this._todoList.addTodo(newTodo);
            console.log("New todo list: ", this._todoList.todoList);
            // clear the input
            this._todoListView.render(this._todoList.todoList);
            // filter the list if needed
            this.filterTodoList();
        }
    };
    TodoIt.prototype.filterTodoList = function () {
        this._todoListView.filter();
    };
    TodoIt.prototype.removeTodo = function (identifier) {
        if (identifier) {
            console.log("item to remove: ", identifier);
            this._todoList.removeTodo(identifier);
            this._todoListView.render(this._todoList.todoList);
            this._filterTodoList();
        }
    };
    return TodoIt;
}());
