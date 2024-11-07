import React from 'react'
import './App.css'
import datafile from './datafile.json'
import Cardcomponent from './Cardcomponent'
import { useParams } from 'react-router-dom'

export const Tabcomponent = () => {
    
    const {userId}=useParams();


    const Cardsetup=()=>
    {
        let cardata=[]

        if(userId==="all")
        {
            cardata=datafile.map((element,index)=><Cardcomponent key={index} data={element}/>)
        }else{
            cardata=datafile.filter((element)=>element.type===userId).map((element,index)=><Cardcomponent key={index} data={element}/>)
        }

        return (
                
            <div className='container'>
                <div className='row'>
                    {cardata}
                </div>
            </div>           
        )
    }
  return (
    <Cardsetup/>
  )
}
