const app = document.getElementById("app");
function Main() {
  const [sentences, setSentences] = React.useState([]);
  const [currentSentence, setCurrentSentence] = React.useState("");

  function handleChange(e) {
    setCurrentSentence(e.target.value);
    console.log(currentSentence);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSentences([...sentences, currentSentence]);
    setCurrentSentence("");
  }
  console.log(sentences);
  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={currentSentence}
          onChange={handleChange}
          placeholder="Entrez une chose à faire"
        />
        <button>ajouter</button>
      </form>
      <div>
        <ol>
          {sentences.map((whatever, unique) => (
            <li key={unique}> {whatever}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
ReactDOM.render(<Main />, app);
