import React from 'react'
import './App.css'
import datafile from './datafile.json'
import Cardcomponent from './Cardcomponent'

export const Tabcomponent = ({type}) => {
    
    const Cardsetup=()=>
    {
        let cardata=[]

        if(type==="All")
        {
            cardata=datafile.map((element,index)=><Cardcomponent key={index} data={element}/>)
        }else{
            cardata=datafile.filter((element)=>element.type===type).map((element,index)=><Cardcomponent key={index} data={element}/>)
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
