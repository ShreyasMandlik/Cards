import ItemsList from "./Components/ItemsList";

function App() {
  return (
    <div className="mr-10">
      <h1 className="text-center pl-10 text-3xl font-bold text-black">
        React hub
      </h1>
      <div className="card-container flex flex-wrap justify-between items-stretch sm:flex-col sm:items-center">
        <ItemsList />
      </div>
    </div>
  );
}

export default App;
