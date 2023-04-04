const app = document.getElementById("app");
function RecipeDetails({ recipe, isShown }){
  let ingredients = []
  for (let i = 1; i < 15; i++) {
    ingredients.push(recipe["strIngredient" + i])
  }
  ingredients = ingredients.filter(str => str !== "" && str!== null);
  return <div style={{
    opacity: 1,
    color: "white",
    backgroundColor: "skyblue",
    display: isShown ? "block" : "none",
    padding: "1rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    justifyContent: "center",
    alignItems: "center",
  }}>
    <h1>{recipe.strMeal}</h1>
    <h3>category : {recipe.strCategory}</h3>
    <ol>
      ingredients:
  {ingredients.map((ingredient, i) =>
    <li key={i}>
      {ingredient}
    </li>)
  }
</ol>
  </div>
  //the recipe title, meal type (breakfast, lunch, supper, or snack), number of people it serves, its difficulty level (beginner, intermediate, advanced), the list of ingredients (including their amounts), and the preparation steps
}
function Recipe({ recipe }) {
  const [isShown,setIsShown] = React.useState(false); 
  //
  return (<li>
    <div onClick={() => setIsShown(true)} style={{padding: "1rem", backgroundColor: "lightgreen"}}> 
      <h2 style={{
        textAlign: "center",
      }}>{recipe.strMeal}</h2>
      <img style={{width: "150px"}} width={150} src={recipe.strMealThumb} alt="rec" />
    </div>
    <div onClick={() => setIsShown(false)} style={{
      display: isShown ? "flex" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "black",
      opacity: 0.7,
      filter: "blur(20px)",
    }}> </div><RecipeDetails recipe={recipe} isShown={isShown} />
  </li> 
  
  
  )
}


{/* <ol>
  {ingredients.map((ingredient, i) =>
    <li key={i}>
      {ingredient}
    </li>)
  }
</ol> */}

function RecipesList({ recipesList }) {
  return <ul style={{
    display: "flex",
    gap: "20px",
    listStyleType: "none",
    flexWrap: "wrap",
  }}>
    {recipesList.map((meal) => <Recipe key={meal.idMeal} recipe={meal} />)}
  </ul>
}
function LetterSelect({ setLetter, letter }) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  // 
  return<div>
    <h3>chooses what letter u want recipes to start by : </h3>
    <select value={letter} onChange={(e) => setLetter(e.target.value)}> 
      {
        alphabet.split("").map((letter, i) =>
          <option value={letter} key={i}>{letter}</option>)
      }
    </select>
    
  </div>
}
function App()
{
  const [data, setData] = React.useState({})
  const [letter, setLetter] = React.useState("a");

  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter
  
  React.useEffect(() => {
     async function fetchData() {
       const response = await fetch(url) 
       const data = await response.json();
       console.log(data);
       setData(data);
     }
     fetchData();
  }, [letter])
  return (
    <div>
        <LetterSelect letter={letter} setLetter={setLetter} />
        {data.meals ? <RecipesList recipesList={data.meals} /> : "" }
    </div>
  )
  
}

ReactDOM.render(<App />, app); 

/* 
ye but then why it doenst work ? it should work so for me we need to create another component above(order doesnt matter when you declare them) this one wiht just the select and a form is not always required
so i would like when i say above i mean in the tree oh yeah sure so another component with just the selectbutton and select and it passes the state letter to this one is it the right way to do it ? yeah that is a good separation of concerns 
ik it s usele ss  but i want to create a select like look at the first component the app
but it s the main one thats why i call it App
wait we lack something no ? in form the form does nothing we need to make user confirm after selecting letter, or you wanted smh else?i mean ye 

it doenst work 
xD yeeee much more clear this is the correct way
we need to create component with all these infos yesss  btwww very common practise what i will do rn
k so now k, we will delete all xD
User can see a list of recipe titles <- check 

 User can click a recipe title to display a recipe card containing the recipe title, meal type (breakfast, lunch, supper, or snack), number of people it serves, its difficulty level (beginner, intermediate, advanced), the list of ingredients (including their amounts), and the preparation steps. <- not check :( will be soon 
*/