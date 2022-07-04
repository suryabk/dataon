import Button from "./component/Button";
import Card from "./component/Card";
import data from "./data.json";
console.log(data);

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Card dataUser={data} />
      <Button />
    </div>
  );
}

export default App;
