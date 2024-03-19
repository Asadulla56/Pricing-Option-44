import "./App.css";
import Nav from "./compontents/Nav/Nav";
import Navbar from "./compontents/Navbar/Navbar";

function App() {
  return (
    <>
      
      <Navbar></Navbar>
      <h1 className="text-6xl bg-red-600 text-white text-center rounded-xl">Vite + React</h1>
      <Nav></Nav>
      
    </>
  );
}

export default App;
