import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Nopage from "./Pages/Nopage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
const App=()=>{
  return(
    <>
    <BrowserRouter>
         <Routes>
             <Route path="/" element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path="/home" element={<Home/>}/>
                 <Route path="/men" element={<Men/>}/>
                 <Route path="/women" element={<Women/>}/>
                 <Route path="/kids" element={<Kids/>}/>
                 <Route path="*" element={<Nopage/>}/>                  
                 <Route path="about" element={<About/>}/>
                 <Route path="contact" element={<Contact/>}/>
                 <Route path="product" element={<Product/>}/>     
             </Route>
         </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;