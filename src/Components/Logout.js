import React from 'react'
import{Redirect} from 'react-router-dom'
import Navbar from './Navbar'
const Logout=()=>{
    localStorage.removeItem('user');
    return(
        <div>
        <Navbar/>
        <Redirect to='/shopping-webapp-reactjs/'/>
        </div>
    ) 
}
export default Logout;