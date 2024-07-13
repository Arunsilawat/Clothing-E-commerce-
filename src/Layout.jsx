import { Link,Outlet } from "react-router-dom"
import Nevbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
const Layout=()=>{
    return(
          <>
          <Nevbar/>
          {/* <hr size="1" color="black"/> */}
           <Outlet/>
          <hr size="1" color="black"/>
          <Footer/>
          </>
    )
}
export default Layout;
