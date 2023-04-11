const app = document.getElementById("app");
function Main() {
  const [sentences, setSentences] = React.useState([]);
  const [currentSentence, setCurrentSentence] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [filteredSentences, setFilteredSentences] = React.useState([]);
  const [trapSentences, setTrapSentences] = React.useState([]);
  function handleChange(e) {
    setCurrentSentence(e.target.value);
  }

  function handleClick() {
    setSentences([...sentences, currentSentence]);
    setTrapSentences([...trapSentences,currentSentence]);
    setCurrentSentence("");
    setSearch("");
  }

  function handleDelete(sentence) {
    setSentences(sentences.filter(a => a !== sentence))
  }

  React.useEffect(() => {
    setFilteredSentences(sentences.filter(s => s.includes(search)))
  }, [search, sentences])

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1>ToDo List</h1>
      <div style={{display: "flex", gap: "20px", marginBottom: "1rem"}}>
        <input
          value={currentSentence}
          onChange={handleChange}
          style={{padding: "0.5rem 1rem", textAlign: "center", borderRadius: "10px", }}
          placeholder="add a element to ur list"
        />
        <button  style={{backgroundColor: "lightgreen"}} onClick={handleClick}>add</button>
      </div>
      <input
        value={search}
        onChange={handleSearch}
        style={{padding: "0.5rem 1rem", textAlign: "center", borderRadius: "10px",minWidth: "275px"}}
        placeholder="Search for a element in your list"
      />
      <h1></h1>
      <ul style={{padding: "1rem", border: "1px solid black", minHeight: "250px", minWidth: "275px", display: "flex", flexDirection: "column", borderRadius: "10px",justifyContent: "top", alignItems: "center"}}>
        {filteredSentences.map(sentence => (
          <li key={new Date().getMilliseconds() + Math.random()}>< Line sentences={sentences} setSentences={setSentences} sentence={sentence} trapSentences={trapSentences} setTrapSentences={setTrapSentences} /> </li>
        ))}
      </ul>
    </div>
  )
}
function Line({ sentences, setSentences, sentence ,trapSentences,setTrapSentences}) {
  const [isEditing, setIsEditing] = React.useState(false)
  const [editedSentence, setEditedSentence] = React.useState();
  const [compteur, setCompteur] = React.useState(false)
  const [dernier, setDernier] = React.useState(sentence)
  const [idd,setId] = React.useState()
  const [bah,setBah] = React.useState(false)
  
  React.useEffect(() => {
    console.log("trap sentence :  ",trapSentences)
    console.log("il est trigger deux fois")
    
    if (isEditing === true) {
      console.log("on est là ") 
      
      setEditedSentence(compteur === false ? < Sentence dernier={dernier} setDernier={setDernier} sentences={sentences} setSentences={setSentences} sentence={sentence} isEditing={isEditing} setIsEditing={setIsEditing} compteur={compteur} setCompteur={setCompteur} /> : dernier)
      //if (compteur === true){setSentences([...sentences, dernier ])}
      
      
      
      
      
      
      
      console.log("bof")
      console.log("idd  : ",idd)
    }
    else if (isEditing === false) {
      setEditedSentence(dernier)
      setCompteur(false)
      
      
      
    }
    
    
  }, [isEditing, compteur])
  




  return (
    <div style={{display: "flex", gap:"10px"}}>
      <span style={{fontFamily: "sans-serif", fontSize: "1.25rem", fontWeight: "bold"}}>{editedSentence}</span>
      <button style={{backgroundColor: "red"}} onClick={(e) => { setSentences(sentences.filter(a => a !== sentence)) }}>remove</button>
      <button style={{backgroundColor: "orange"}} onClick={(e) => { setIsEditing(isEditing === true ? false : true) }}>edit</button>
    </div>
  )
  //<li key={sentence}> {sentence} <button onClick={(e) => { setSentences(sentences.filter(a => a !== sentence)) }}>remove</button><button onClick={(e) => { return <input /> }}>edit</button></li>
}
function Sentence({ sentences, setSentences, sentence, isEditing, setIsEditing, editedSentence, setEditedSentence, compteur, setCompteur, dernier, setDernier }) {
  const [newSentence, setNewSentence] = React.useState("")
  const [idd,setId] = React.useState()

  function handleChhange(e) {
    setNewSentence(e.target.value)
    console.log(newSentence)
  }

  /*React.useEffect(()=>{
    console.log(newSentence);
    setEditedSentence(newSentence);
    setIsEditing(false);
    console.log("newsentence",newSentence)
    console.log("edited",editedSentence)
  },[compteur])*/
  function handleCllick() {
    setId(sentence.key)
    
    console.log("ceci est editedSentence : ", editedSentence)
    compteur === true ? setCompteur(false) : setCompteur(true)
    setDernier(newSentence)
    console.log("newSentence :   ", newSentence)
    console.log("dernier : ", dernier)
    console.log(compteur)
    console.log("sentence : ", sentence)


  }
  return (

    <>
      <input value={newSentence} onChange={handleChhange}
        placeholder="enter the new sentence" /><button onClick={() => handleCllick()}>confirm</button></>
  )
}
/*function Sentence({ sentences,setSentences, sentence,isEditing,setIsEditing,editedSentence,setEditedSentence }){
  
  /* React.useEffect(() => {
    if (isEditing === true){
      setEditedSentence(<><input onChange/><button>confirm</button></>)
    }
    else{
      setEditedSentence(sentence)
      
  }},[isEditing]) */
/*React.useEffect(() => {
  if (isEditing === true){
    setEditedSentence(<><input /><button>confirm</button></>)
    console.log("bof")
  }
  else if(isEditing === false){
    setEditedSentence(sentence)
    console.log("bif")
}},[editedSentence])
console.log(editedSentence)
return(
  <p>ah d accord {editedSentence}</p>
)
}*/



ReactDOM.render(<Main />, app);
/*

const ChampionsInfo = ({ width }) => {
  const [input, setInput] = useState('');
  const { loading, error, data } = useQuery(GET_CHAMPIONS);
  const [champions, setChampions] = useState([]);
  const [filteredChampions, setFilteredChampions] = useState([]);
  const [sortType, setSortType] = useState('All Champions');

  useEffect(() => {
    if (!data) return;
    setChampions(data.getChampionsInfo);
    setFilteredChampions(data.getChampionsInfo);
  }, [data]);

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
    setSortType('All Champions');

    const filtered = champions.filter((champ) =>
      champ.Name_English.toLowerCase().includes(input),
    );

    setFilteredChampions(filtered);
  };
  const filterChampions = (Role) => {
    setInput('');
    switch (Role) {
      case 'damages':
        setFilteredChampions(
          champions.filter((champion) => champion.Roles === 'Paladins Damage'),
        );
        setSortType('Damages');
        break;
      case 'supports':
        setFilteredChampions(
          champions.filter((champion) => champion.Roles === 'Paladins Support'),
        );
        setSortType('Supports');
        break;
      case 'tanks':
        setFilteredChampions(
          champions.filter(
            (champion) => champion.Roles === 'Paladins Front Line',
          ),
        );
        setSortType('Front Lines');
        break;
      case 'flanks':
        setFilteredChampions(
          champions.filter((champion) => champion.Roles === 'Paladins Flanker'),
        );
        setSortType('Flanks');
        break;
      default:
        setFilteredChampions(champions);
        setSortType('All Champions');
        break;
    }
  };

  if (!data) {
    return (
      <>
        <Helmet>
          <html lang='en' />
          <title>Paladins Data - Champions Information</title>
          <meta
            name='keywords'
            content='Paladins,PaladinsData, Paladins Score, Paladins Stats, Paladins Ranking, Paladins MMR, Paladins Profiles, Paladins Random Wheel, Random Champion, Player Comparing, Paladins Compare'
          />
          <meta name='application-name' content='PaladinsData' />
          <meta
            name='description'
            content='PaladinsData - One of the best sources for player profiles, rankings and player comparing'
          />
        </Helmet>
        <div className='champions-container' style={{ position: 'relative' }}>
          <div className='champions-container-label'>{sortType}</div>
          <div className='line-grey-left'></div>
          <div className='champions-list'></div>
          <CircularProgress
            color='info'
            size={100}
            style={{
              position: 'absolute',
              left: '0',
              right: '0',
              margin: '0 auto',
            }}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>Paladins Data - Champions Information</title>
        <meta
          name='keywords'
          content='Paladins,PaladinsData, Paladins Score, Paladins Stats, Paladins Ranking, Paladins MMR, Paladins Profiles, Paladins Random Wheel, Random Champion, Player Comparing, Paladins Compare'
        />
        <meta name='application-name' content='PaladinsData' />
        <meta
          name='description'
          content='PaladinsData - One of the best sources for player profiles, rankings and player comparing'
        />
      </Helmet>
      <div className='top-panel'>
        <div className='search'>
          <BsSearch style={{ margin: 'auto 10px' }} />
          <span
            className='p-autocomplete p-component p-inputwrapper auto-complete'
            aria-haspopup='listbox'
            aria-expanded='false'
            aria-owns='pr_id_1_list'
            id='pr_id_1'
          >
            <input
              type='text'
              role='searchbox'
              aria-autocomplete='list'
              aria-controls='pr_id_1_list'
              className='p-inputtext p-component p-autocomplete-input'
              autoComplete='off'
              placeholder='Champion name'
              value={input}
              onChange={handleInput}
            />
          </span>
        </div>
        <div className='divider'></div>
        <div className='class-buttons'>
          <button
            className='light-button class-button'
            onClick={() => filterChampions('damages')}
          >
            Damage
          </button>
          <button
            className='light-button class-button'
            onClick={() => filterChampions('flanks')}
          >
            Flank
          </button>
          <button
            className='light-button class-button'
            onClick={() => filterChampions('tanks')}
          >
            Front Line
          </button>
          <button
            className='light-button class-button'
            onClick={() => filterChampions('supports')}
          >
            Support
          </button>
          <MdRestartAlt
            onClick={() => filterChampions('default')}
            style={{ color: '#888', fontSize: '25px', textAlign: 'center' }}
          />
        </div>
      </div>
      <div className='champions-container'>
        <div className='champions-container-label'>{sortType}</div>
        <div className='line-grey-left'></div>
        <div className='champions-list'>
          {filteredChampions.map((champion) => {
            return <Accordion champion={champion} key={uuid4()} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ChampionsInfo;


*/