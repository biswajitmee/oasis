import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
 import Contact from './Contact.jsx'
import Dishes from './Dishes'
import Order from './Order'
import Offer from './Offer'
 
 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='dishes' element={<Dishes />} />
      <Route path='order' element={<Order />} />
      <Route path='offer' element={<Offer />} />
      <Route path='contact' element={<Contact />} />
 
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
