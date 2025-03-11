import Navbar from "./components/Navbr";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import CreatePage from "./pages/CreateProduct";

function App() {

  return (
    <>
      <Box>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<CreatePage/>} />
        </Routes>

      </Box>
    </>
  )
};

export default App;
