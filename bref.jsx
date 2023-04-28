const app = document.getElementById("app");
function Main() {
  const [todoInput, setTodoInput] = React.useState("");
  const [todos, setTodos] = React.useState({});
  const [id, setId] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [filteredTodos, setFilteredTodos] = React.useState({});

  React.useEffect(() => {
    const newFilteredTodos = Object.entries(todos).filter(([id, todo]) =>
      todo.toLowerCase().includes(search.toLowerCase())
    );
    const filteredTodosObject = newFilteredTodos.reduce((acc, [id, todo]) => {
      acc[id] = todo;
      return acc;
    }, {});

    setFilteredTodos(filteredTodosObject);
  }, [search, todos]);

  function createTodo() {
    setTodos({ ...todos, [id]: todoInput });
    setTodoInput("");
    setId(id + 1);
  }
  function deleteTodo(id) {
    delete todos[id];
    setTodos({ ...todos });
  }
  function editTodo(id, newText) {
    todos[id] = newText;
    setTodos({ ...todos });
  }
  return (
    <>
      <input
        type="text"
        placeholder="Your todo"
        onChange={(e) => setTodoInput(e.target.value)}
        value={todoInput}
      />
      <button onClick={createTodo}>Add</button>
      <input
        type="text"
        placeholder="Search todo"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div>
        <ul>
          {Object.entries(filteredTodos).map(([id, todoText]) => (
            <li key={id}>
              <Todo
                handleDelete={() => deleteTodo(id)}
                handleEdit={(newText) => editTodo(id, newText)}
              >
                {todoText}
              </Todo>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
function Todo({ children, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [currentTodo, setCurrentTodo] = React.useState(children);

  function saveNewTodo() {
    handleEdit(currentTodo);
    setIsEditing(false);
  }
  if (isEditing) {
    return (
      <>
        <input
          type="text"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        />
        <button onClick={saveNewTodo}>Save</button>
      </>
    );
  } else
    return (
      <>
        <div>{children}</div>
        <button onClick={handleDelete}>delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
}
ReactDOM.render(<Main />, app);