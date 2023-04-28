const app = document.getElementById("app");
function Main() {
  const [todoInput, setTodoInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [id, setId] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [filteredTodos, setFilteredTodos] = React.useState([]);

  React.useEffect(() => {
    setFilteredTodos(
      todos.filter(({ id, text }) =>
        text.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, todos]);

  function createTodo() {
    setTodos([...todos, { text: todoInput, id: Math.random() * 100000 }]);
    setTodoInput("");
  }
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function editTodo(id, newText) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
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
          {filteredTodos.map(({ id, text }) => (
            <li key={id}>
              <Todo
                handleDelete={() => deleteTodo(id)}
                handleEdit={(newText) => editTodo(id, newText)}
              >
                {text}
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