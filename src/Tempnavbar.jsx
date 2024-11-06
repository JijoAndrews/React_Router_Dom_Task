import React, { useEffect, useState } from 'react'
import './App.css'
import { Link,Outlet} from 'react-router-dom'


export const Tempnavbar = () => {
 
    const[test,settest]=useState("--SELECT--");
    const[hideval,sethideval]=useState(1);
    useEffect(()=>{console.log("rendered:",test,hideval)},[test,hideval])

    return (
    <div className='navbarbtnclasss1'>   
              
    <div className='btnclassforlink'>  

      {/* <div className='drpdownbtn'>{test}</div>
        <i className="bi bi-list fs-3 clickbtnforlink" onClick={()=>{console.log("hello",test),hideval===0?sethideval(1):sethideval(0)}}></i> */}

      <div className='drpdownbtnv2'>{test}</div>
      <i className="bi bi-list fs-3 drpdownbtnv2" onClick={()=>{console.log("hello",test),hideval===0?sethideval(1):sethideval(0)}}></i>

    </div>
    
    <div className={`hideclass${hideval}`}>

      <Link className="linkclass btnclass" to="/all" onClick={()=>{settest("ALL"),hideval===0?sethideval(1):sethideval(0)}}>ALL</Link>
      <Link className="linkclass btnclass" to="/fsd" onClick={()=>{settest("FULL STACK DEVELOPMENT"),hideval===0?sethideval(1):sethideval(0)}}>FULL STACK DEVELOPMENT</Link>
      <Link className="linkclass btnclass" to="/ds" onClick={()=>{settest("DATA SCIENCE"),hideval===0?sethideval(1):sethideval(0)}}>DATA SCIENCE</Link>
      <Link className="linkclass btnclass" to="/cybersec" onClick={()=>{settest("CYBER SECURITY"),hideval===0?sethideval(1):sethideval(0)}}>CYBER SECURITY</Link>
      <Link className="linkclass btnclass" to="/career" onClick={()=>{settest("CAREER"),hideval===0?sethideval(1):sethideval(0)}}>CAREER</Link>

     
      {/* <div className={`${btnsste[1]}`} onClick={()=>changetopsec(1)}>FULL STACK DEVELOPMENT</div>
      <div className={`${btnsste[2]}`} onClick={()=>changetopsec(2)}>DATA SCIENCE</div>
      <div className={`${btnsste[3]}`} onClick={()=>changetopsec(3)}>CYBER SECURITY</div>
      <div className={`${btnsste[4]}`} onClick={()=>changetopsec(4)}>CAREER</div> */}
    </div>

        <Outlet/>
</div>
  )
}
