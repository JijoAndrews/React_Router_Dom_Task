import './App.css'
import {useParams} from 'react-router-dom'
import { Tempnavbar } from './Tempnavbar'
import { Tabcomponent } from './Tabcomponent'

export const Navbarcomponet = ({typee}) => {
    
    const {userId}=useParams();

    return (
    <>
     <Tempnavbar/>
     <p>{userId}</p>
     <Tabcomponent type={typee}/>
    </>
    )
}
