import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Tempnavbar } from './Tempnavbar'
import './App.css'
import { Tabcomponent } from './Tabcomponent'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Tempnavbar/>,

    children:[
    {
      path: '/all',
      element: <Tabcomponent type={"All"}/>
    },
    {
      path: '/fsd',
      element: <Tabcomponent type={"fsd"}/>
    },
    {
      path: '/ds',
      element: <Tabcomponent type={"ds"}/>
    },
    {
      path: '/cybersec',
      element:  <Tabcomponent type={"cs"}/>
    },
    {
      path: '/career',
      element:  <Tabcomponent type={"c"}/>
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
