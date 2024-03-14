import Home from "./Components/home";
import Select from "./Components/select";
import Quiz from "./Components/quiz";
import Header from "./Components/header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Select" element={<Select />} />
        <Route path="/Quiz" element={<Quiz />} /> 
      </Routes>
    </>
  )
}

export default App;
