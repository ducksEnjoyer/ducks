const app = document.getElementById("app");
function Main() {
  const [duck, setDuck] = React.useState({});
  let timer;
  React.useEffect(() => {
    timer = setInterval(async () => {
      console.log(1);
      const res = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await res.json();
      setDuck(data);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  console.log(
    champs.map((qwack) => {
      return qwack.Name;
    })
  );
  if (duck.joke) {
    return (
      <div style={{ color: "blue", textAlign: "center" }}>{duck.joke}</div>
    );
  } else {
    return (
      <>
        <div style={{ color: "red", textAlign: "center" }}>{duck.setup}</div>
        <div style={{ textAlign: "center" }}>{duck.delivery}</div>
      </>
    );
  }
}
const isActive = false;

ReactDOM.render(isActive ? <Main /> : "", app);
