const app = document.getElementById("app");
function Main() {
  const [sentences, setSentences] = React.useState([]);
  const [currentSentence, setCurrentSentence] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [filteredSentences, setFilteredSentences] = React.useState([]);
  const [displaySentence ,setDisplaySentence] = React.useState([]);

  function handleChange(e) {
    setCurrentSentence(e.target.value);
  }
  function handleClick() {

    setSentences([...sentences, currentSentence]);
    setCurrentSentence("");
    // console.log(e.target.key);
    // setDisplaySentence(sentences);

  }

  function handleSearch(e) {
    setSearch(e.target.value);
    const newFilteredSentences = sentences.filter(a => a.includes(e.target.value))
    console.log(newFilteredSentences)
    setFilteredSentences(newFilteredSentences)
    
  }
  console.log({ sentences, filteredSentences, search })
  return (
    <>
      <h1>ToDo List</h1>

      <input
        value={currentSentence}
        onChange={handleChange}
        placeholder="add a element to ur list"
      />
      <input

        onChange={handleSearch}
        placeholder="Search for a element in your list"
      />
      <button onClick={handleClick}>add</button>
      <ul>
        {filteredSentences.map(whatever => (
          <li key={whatever}> {whatever}</li>
        ))}
      </ul>
    </>


  )
  /*return (
    <>
      <h1>ToDo List</h1>

      <input
        value={currentSentence}
        onChange={handleChange}
        placeholder="Entrez une chose à faire"
      />
      <button onClick={handleClick}>add</button>
      <button onClick={handleClick2}>delete</button>
      <button onClick={handleClick3} >search</button>
      <div>
        {
          indicateur === "1" ? <><span>List :</span>
            <ul>
              {sentences.map((whatever, unique) => (
                <li key={unique}> {whatever}</li>
              ))}
            </ul> </> : indicateur === "2" ? <div>
              here s the list without deleted elements  :
              <ul>
                {sentences.map((whatever, unique) => (
                  <li key={unique}> {whatever}</li>
                ))}
              </ul>
            </div> : indicateur === "3" ? <div>
              elements including what u searched for :
              <ul>
                {voila.map((whatever, unique) => (
                  <li key={unique}> {whatever}</li>
                ))}
              </ul>
            </div> : console.log("cant happen") } 
            </div>
            </>  
            
      
    
  )*/

}



ReactDOM.render(<Main />, app);
