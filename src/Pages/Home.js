import axios from "axios"
import Info from "../Components/Info"
import Navigation from "../Components/Navigation"
import Liste from "../Container/Liste"
import { useEffect, useState } from "react"
import "../Styles/main.css"


// import Liste from "../Container/Liste"
const Home = ()=>{
    const [newData, setNewData] = useState([])
    useEffect(()=>{
        getData()
    }, [])

    const getData = ()=>{
        axios.get("http://localhost:3003/Datas").then((res) => setNewData(res.data));
    }

    return(
        <div className="Home" >
            <Navigation/>
            <h3 className="titre">
                Liste des utilisateurs:
            </h3>

            <div className="info">
                <Liste/>
                {newData.map((Datas)=>(
                    <Info
                        key={Datas.id}
                        id={Datas.id}
                        nom={Datas.nom}
                        prenom={Datas.prenom}
                        age={Datas.age}
                    />
                ))}
            </div>
            
        </div>
    )
}
export default Home