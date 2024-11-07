import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Tempnavbar } from './Tempnavbar'
import './App.css'
import { Tabcomponent } from './Tabcomponent'
import { Navbarcomponet } from './Navbarcomponet'


const router=createBrowserRouter([
  {
    
    path:'/',
    element:<Tempnavbar/>,

    children:[
    {
      path: '/:userId',
      element: <Tabcomponent/>
    }
  ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
