import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import SingleBlog from "./Components/SingleBlog/SingleBlog";

import './App.css';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<NavBar></NavBar>
<Routes>
<Route path="/" element={<Home></Home>}  ></Route>
<Route path="/SingleBlog/:id" element={<SingleBlog></SingleBlog>}  ></Route>
</Routes>
<Footer></Footer>
</BrowserRouter>
    </div>
  );
}

export default App;
