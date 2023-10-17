import { useState } from 'react'
import '../Styles/main.css'
import axios from 'axios'
import Delete from './Delete'

const Info = ({nom, prenom, age, id})=>{
    const [isEditing, setIsEditing] = useState(false)
    const [newNom, setNewNom] = useState("")
    const [newPrenom, setNewPrenom] = useState("")
    const [newAge, setNewAge] = useState("")
    const data = {
        nom : newNom ? newNom : nom,
        prenom : newPrenom ? newPrenom : prenom,
        age : newAge ? newAge : age
           
    }
    const handleEdit = ()=>{
        axios.put('http://localhost:3003/Datas/' + id , data)
        .then(()=>
            setIsEditing(false)
        )
    }


    return(
        <div className='info'>
            
                <ul>
                    <li className={isEditing ? "active":""}>

                    <div className={isEditing ? "Focus":"nom"}>
                        {isEditing ? (
                            <input type="text" defaultValue={newNom? newNom : nom} onChange={(e)=>setNewNom(e.target.value)}/>
                        ) : (
                            <input type='text' value={newNom? newNom : nom}/>  
                        )}
                    </div>
                    
                    <div className={isEditing ? "Focus":"prenom"}>
                    {isEditing ? (
                            <input type="text" defaultValue={newPrenom? newPrenom : prenom} onChange={(e)=>setNewPrenom(e.target.value)}/>
                        ) : (
                            <input type='text' value={newPrenom? newPrenom : prenom}/> 
                        )}
                    </div>

                    <div className={isEditing ? "Focus":"age"}>
                        {isEditing ? (
                            <input type="Number" defaultValue={newAge? newAge : age} onChange={(e)=>setNewAge(e.target.value)}/>
                                ) : (
                            <input type='Number' value={newAge? newAge : age }/>
                        )}
                        <span>ans</span>
                        
                    </div>

                    <div className='btn'>
                        <Delete id={id}/>
                        {isEditing ? (
                            <button 
                                className='valider'
                                onClick={handleEdit}
                            >Valider</button>
                        ):(
                            <button  
                                className='button'
                                onClick={()=>setIsEditing(true)}>Moifier</button>
                        )}
                    </div>
                    </li>
                </ul>
            
               
                
               
        </div>
    )
}

export default Info