import { Route, Routes } from "react-router-dom";
import KeypadAccess from "./components/KeypadAccess/KeypadAccess.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Calculator from "./components/Calculator/Calculator.tsx";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<KeypadAccess />} />
        <Route path="/access-keypad" element={<KeypadAccess />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
};

export default App;
