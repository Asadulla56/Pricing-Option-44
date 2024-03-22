import "./App.css";
import BarCharts from "./compontents/BarCharts/BarCharts";
import LineChart from "./compontents/LineChart/LineChart";
import Nav from "./compontents/Nav/Nav";
import Phones from "./compontents/Phones/Phones";
import PriceOptions from "./compontents/PriceOptions/PriceOptions";

// import Navbar from "./compontents/Navbar/Navbar";

function App() {
  return (
    <>
      <Nav></Nav>
      {/* <Navbar></Navbar> */}
      <h1 className="text-6xl mt-10 bg-red-600 text-white text-center rounded-xl">
        Vite + React
      </h1>
      <PriceOptions></PriceOptions>
      <div className="grid md:grid-cols-2">
      <LineChart></LineChart>
      <BarCharts></BarCharts>
      <Phones></Phones>
      </div>
    </>
  );
}

export default App;
