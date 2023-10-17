import {Route, Routes} from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import NotFound from "../Pages/NotFound"
import Add from "../Pages/Add"
const Routage = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/a-propos" element={<About/>}></Route>
            <Route path="/ajout" element={<Add/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}

export default Routage