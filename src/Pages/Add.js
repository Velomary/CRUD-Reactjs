import React, { useState } from 'react'
import '../Styles/main.css'
import axios from 'axios'
import Navigation from '../Components/Navigation'

const Add = () => {

  const[nom, setNom] = useState('')
  const[prenom, setPrenom] = useState('')
  const[age, setAge] = useState('')
  const[error,setError] = useState(false)
  const[success,setsuccess] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    if(nom === "" || prenom ==="" || age ===""){
      setError(true)
      setsuccess(false)
    }else{
      axios.post("http://localhost:3003/Datas",{
        nom,
        prenom,
        age
      }).then(()=>{
        setNom("");
        setPrenom("");
        setAge("");
        setError(false)
        setsuccess(true)
      }) 
    }
    
  }
  return (
    <div>
      <Navigation/>
        <form onSubmit={(e)=> handleSubmit(e)} id='add-card'
          className={error===true && 'alert'}
        >
          <h1 className='titre'>
            Nouveau
          </h1>
          <label htmlFor="FName">Nom</label>
          <input
            className='add_input'
            onChange={(e)=>setNom(e.target.value)} 
            type="text" 
            placeholder='Nom...' 
            id='FName'
            value={nom}
            />

          <label htmlFor="Name">Prenom</label>
          <input
            className='add_input'
            onChange={(e)=>setPrenom(e.target.value)}
            type="text" 
            placeholder='Prenom...' 
            id='Name'
            value={prenom}
            />

          <label htmlFor="Age">Age</label>
          <input 
            className='add_input'
            onChange={(e)=>setAge(e.target.value)}
            type="number" 
            placeholder='Age...' 
            id='Age'
            value={age}
            />

          {error && <p style={{color:"red"}}> Veillez remplire tout les champs</p>}
          {success && <p style={{color:"#3CB371"}}>Utilisateur bien ajouter!</p>}
            

          <input type="submit" className='button' value="Enregistrer" />  
          <div>
          </div>
        </form>
    </div>
  )
}

export default Add