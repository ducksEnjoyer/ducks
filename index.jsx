const app = document.getElementById("app");
function Main() {
  const [sentences, setSentences] = React.useState([]);
  const [currentSentence, setCurrentSentence] = React.useState("");
  const [voila,setVoila] = React.useState("");
  const [indicateur,setIndicateur] = React.useState("1");

  function handleChange(e) {
    setCurrentSentence(e.target.value);
    console.log(currentSentence);
  }
  function handleClick(e) {
    
    setSentences([...sentences, currentSentence]);
    setCurrentSentence("");
    console.log(e.target.key);
    setIndicateur("1");
  }
 
  function handleClick2(){
    
      
    setSentences(sentences.filter(a=> a !== currentSentence));
    setCurrentSentence("");
    setIndicateur("2");
    
    
  }
  function handleClick3(){
    setVoila(sentences.filter(a=> a.includes(currentSentence)));
    setCurrentSentence("");
    setIndicateur("3");
  }
  
  
    if(indicateur === "1"){
      return(
        <>
          <h1>ToDo List</h1>
          
            <input
              value={currentSentence}
              onChange={handleChange}
              placeholder="Entrez une chose à faire"
            />
            <button onClick={handleClick}>ajouter</button>
            <button onClick={handleClick2}>supprimer</button>
            <button onClick={handleClick3} title="permet de rechercher une des choses à faire en fonctions des mots qu il contient">rechercher</button>
         
          
        
      
      <div>
        voici la liste : 
      <ul>
        {sentences.map( (whatever,unique) => (
          <li key={unique}> {whatever}</li>
        ))}
      </ul>
    </div>
    </>)
    }
    else if(indicateur === "2"){
      return(
      <>
        <h1>ToDo List</h1>
        
          <input
            value={currentSentence}
            onChange={handleChange}
            placeholder="Entrez une chose à faire"
          />
          <button onClick={handleClick}>ajouter</button>
          <button onClick={handleClick2}>supprimer</button>
          <button onClick={handleClick3} title="permet de rechercher une des choses à faire en fonctions des mots qu il contient">rechercher</button>
       
        
      
    
    <div>
      voici la liste une fois les elements supprimés : 
    <ul>
      {sentences.map( (whatever,unique) => (
        <li key={unique}> {whatever}</li>
      ))}
    </ul>
  </div>
  </>)
  }
  else{
     return( 
    <>
      <h1>ToDo List</h1>
      
        <input
          value={currentSentence}
          onChange={handleChange}
          placeholder="Entrez une chose à faire"
        />
        <button onClick={handleClick}>ajouter</button>
        <button onClick={handleClick2}>supprimer</button>
        <button onClick={handleClick3} title="permet de rechercher une des choses à faire en fonctions des mots qu il contient">rechercher</button>
     
      
    
  
  <div>
    les elements correspondants à votre recherche: 
  <ul>
    {voila.map( (whatever,unique) => (
      <li key={unique}> {whatever}</li>
    ))}
  </ul>
</div>
</>)
}
    }
    

ReactDOM.render(<Main />, app);
