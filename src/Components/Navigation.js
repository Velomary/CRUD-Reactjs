import {NavLink} from 'react-router-dom'
import '../Styles/main.css'
const Navigation = ()=>{
    return(
        <div className='nav'>
            <NavLink to='/'>
                Accueil
            </NavLink>
            <NavLink to='/ajout'> Ajouter </NavLink>
            <NavLink to='/a-propos'>
                A-propos
            </NavLink>
            
        </div>
    )
}
export default Navigation