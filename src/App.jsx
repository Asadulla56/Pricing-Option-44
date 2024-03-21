import "./App.css";
import Nav from "./compontents/Nav/Nav";
import PriceOptions from "./compontents/PriceOptions/PriceOptions";

// import Navbar from "./compontents/Navbar/Navbar";

function App() {
  return (
    <>
      <Nav></Nav>
      {/* <Navbar></Navbar> */}
      <h1 className="text-6xl bg-red-600 text-white text-center rounded-xl">
        Vite + React
      </h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
