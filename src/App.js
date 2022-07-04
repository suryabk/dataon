import Card from "./component/Card";
import data from "./data.json";
console.log(data);

function App() {
  return (
    <div className="App">
      <Card dataUser={data} />
    </div>
  );
}

export default App;
