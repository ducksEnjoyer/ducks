const app = document.getElementById("app");

function Recipe({ recipe }) {
  let ingredients = []
  for (let i = 1; i < 15; i++) {
    ingredients.push(recipe["strIngredient" + i])
  }
  ingredients = ingredients.filter(str => str !== "");
  return (<li>
    <h2>{recipe.strMeal}</h2>
    <ol>
      {ingredients.map((ingredient) =>
        <li>{
      ingredient}</li>)}
    </ol>
  </li>)
}

function RecipesList({ recipesList }) {
  return <ul>
    {recipesList.map((meal) => <Recipe recipe={meal} />)}
  </ul>
}
function App() {
  const [data,setData] = React.useState({})
   React.useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(res => res.json()).then(data => setData(data)) 
    }, [])
  console.log(data);
    return <div>APP
        {data.meals ? <RecipesList recipesList={data.meals} /> : "" }
    </div>
}
console.log(1)

ReactDOM.render(<App />, app); 

/* xD yeeee much more clear
we need to create component with all these infos yesss  btwww very common practise what i will do rn
k so now k, we will delete all xD
User can see a list of recipe titles <- check 

 User can click a recipe title to display a recipe card containing the recipe title, meal type (breakfast, lunch, supper, or snack), number of people it serves, its difficulty level (beginner, intermediate, advanced), the list of ingredients (including their amounts), and the preparation steps. <- not check :(
*/