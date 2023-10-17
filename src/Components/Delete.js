import React from 'react'
import '../Styles/main.css'
import axios from 'axios'

const Delete = ({id,nom}) => {
    const handleDelete = ()=>{
       axios.delete('http://localhost:3003/Datas/'+id)
       window.location.reload()
    }

  return (
    <div className='button' onClick={
      ()=>{
        if(window.confirm('Voulez vous vraiment supprimer cette personne?')){
          handleDelete()
        }
      }
    }>Supprimer</div>
  )
}

export default Delete