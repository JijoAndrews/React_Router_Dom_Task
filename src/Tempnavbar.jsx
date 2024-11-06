import React, { useEffect, useState } from 'react'
import './App.css'
import { Link,Outlet} from 'react-router-dom'


export const Tempnavbar = () => {
 
    const[test,settest]=useState("--SELECT--");
    const[hideval,sethideval]=useState(1);
    useEffect(()=>{},[test,hideval])

    return (
    <div className='navbarbtnclasss1'>   
     
      <div className='btnclassforlink'>  

        <div className='drpdownbtnv2'>{test}</div>
        <i className="bi bi-list fs-3 drpdownbtnv2" onClick={()=>{hideval===0?sethideval(1):sethideval(0)}}></i>

      </div>
      
      <div className={`hideclass${hideval}`}>
      {/* ,hideval===0?sethideval(1):sethideval(0) */}
        <Link className="linkclass btnclass" to="/all" onClick={()=>{settest("ALL") ,hideval===0?sethideval(1):sethideval(hideval) }}>ALL</Link>
        <Link className="linkclass btnclass" to="/fsd" onClick={()=>{settest("FULL STACK DEVELOPMENT"),hideval===0?sethideval(1):sethideval(hideval) }}>FULL STACK DEVELOPMENT</Link>
        <Link className="linkclass btnclass" to="/ds" onClick={()=>{settest("DATA SCIENCE"),hideval===0?sethideval(1):sethideval(hideval) }}>DATA SCIENCE</Link>
        <Link className="linkclass btnclass" to="/cybersec" onClick={()=>{settest("CYBER SECURITY"),hideval===0?sethideval(1):sethideval(hideval) }}>CYBER SECURITY</Link>
        <Link className="linkclass btnclass" to="/career" onClick={()=>{settest("CAREER"),hideval===0?sethideval(1):sethideval(hideval) }}>CAREER</Link>

      </div>
      <Outlet/>
    </div>
  )
}
