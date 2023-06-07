// import MyHeading, { MyHeading1 } from "./components/MyHeading";
// const a = 200;
// import {MyHeading3} from "./components/MyHeading"

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/App.css";
import "./styles/Header.css";


function App(){
   return( 
   <Router>
    <Header />
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
</Routes>
   </Router>
   );
}
export default App;






































































































































































// return(
//     <>
// <div>
//     <MyHeading name ="abhi" text ="nice dude"/>
//     <MyHeading1/>
//     <MyHeading3/>
//     <h1>
//         welcome page 1
//     </h1>
//     <p>hi there</p>
// </div>
// <div>asadas</div>
// </>
// // )