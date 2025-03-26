import Navbar from "./components/Navbr";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CreatePage from "./pages/CreateProduct";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
// import CartPage from "./pages/CartProduct";

function App() {

  return (
    <>
      <Box>

        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<CreatePage/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>

      </Box>
    </>
  )
};

export default App;
