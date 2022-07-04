import "./App.css";
import Button from "./component/Button";
import Card from "./component/Card";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Card dataUser={data} />
      <Button />
    </div>
  );
}

export default App;
