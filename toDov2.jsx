const app = document.getElementById("app");
function Main(){
    const [atom,setAtom] = React.useState("")
    const [list,setList] = React.useState([])
    const [currentObj,setCurrentObj] = React.useState(null)
    const [currentSentence,setCurrentSentence] = React.useState("")
    const [increment,setIncrement] = React.useState(0) 
    const [filteredSentences, setFilteredSentences] = React.useState([])
    const [search,setSearch] = React.useState("")
    const [isEditing,setIsEditing] = React.useState(false)
    const [isEditingV2,setIsEditingV2] = React.useState(false)
    const [something,setSomething] = React.useState(null)
    const [thisOne,setThisOne] = React.useState(null)
    function handleChange(e){
        setCurrentSentence(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        setCurrentObj({id:increment,sentence:currentSentence})
        setCurrentSentence("")
        setIncrement(increment +1);
        setSearch("");
        }
    function handleCanard(id){
     setList(list.filter((a) => a.id !== id))
    }
    function handleSearch(e){
        setSearch(e.target.value)
    }
   React.useEffect(() => {
        setFilteredSentences(list.filter((s) => s.sentence.includes(search)))
        search == "" ? setIsEditing(false) : setIsEditing(true) 
      }, [search, list])
    React.useEffect(()=>{
        currentObj == null ? console.log(list) : 
        setList([...list,currentObj])
         setCurrentObj(null)
    },[currentObj,list])
    React.useEffect(()=>{
        something == null ? console.log(list) :
      list.map((listItem)=>{
            listItem.id == something ? 
            listItem.sentence = atom :
            console.log("osef") ; 
            setSomething(null)})
        setIsEditingV2(false)
    },[something])
    return(
    <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <div style={{display: "flex", gap: "20px", marginBottom: "1rem"}}>
        <input placeholder="add a element to your list"
        style={{padding: "0.5rem 1rem", textAlign: "center", borderRadius: "10px",minWidth: "275px"}}
        onChange={handleChange}
        value={currentSentence}/>
        {<input
        value={search}
        onChange={handleSearch}
        style={{padding: "0.5rem 1rem", textAlign: "center", borderRadius: "10px",minWidth: "275px"}}
        placeholder="Search for a element in your list"
    />}</div>
        <div style={{display: "flex",justifyContent:"center",alignItems:"center"}}><button style={{backgroundColor: "lightgreen" }} type="submit">envoyer</button></div>
        </form>
<ul style={{padding: "1rem", border: "1px solid black", minHeight: "250px", minWidth: "275px", display: "flex", flexDirection: "column", borderRadius: "10px",justifyContent: "top", alignItems: "center"}}>
           {
            isEditing==false ? 
            
            list.map((listItem) => <div style={{display: "flex", gap:"10px"}}>
                <li key={listItem.id}>{ isEditingV2==false || thisOne == listItem.id ?   listItem.sentence : <><input onChange={(e)=>setAtom(e.target.value)}  placeholder="what u wanna change"/>
                <button  style={{backgroundColor: "purple"}} onClick={() => setSomething(listItem.id)}>confirm edit</button></>}
            <button style={{backgroundColor: "red"}} onClick={() => handleCanard(listItem.id)}>remove</button>
            <button style={{backgroundColor: "orange"}} onClick={(()=> isEditingV2 == false ? (setIsEditingV2(true) ,setThisOne(listItem.id)) :setIsEditingV2(false))}>edit</button></li></div>) 
            : 
            filteredSentences.map((listItem) => <div style={{display: "flex", gap:"10px"}}>
                <li key={listItem.id}>{ isEditingV2==false || thisOne == listItem.id ?   listItem.sentence : <><input onChange={(e)=>setAtom(e.target.value)}  placeholder="what u wanna change"/>
                 <button style={{backgroundColor: "purple"}} onClick={() => setSomething(listItem.id)}>confirm edit</button></>}
                 <button  style={{backgroundColor: "red"}} onClick={() => handleCanard(listItem.id)} >remove</button>
                 <button style={{backgroundColor: "orange"}} onClick={(()=> isEditingV2 == false ? (setIsEditingV2(true) ,setThisOne(listItem.id)):setIsEditingV2(false))}>edit</button></li></div>)
           }
        </ul></div>)}
ReactDOM.render(<Main />, app);