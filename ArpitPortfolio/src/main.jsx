import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppOrLayout from './AppOrLayout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import ContactMe from './components/ContactMe.jsx'
import Projects from './components/MyProjects.jsx'
import User from './components/Extendedpage.jsx'
import Github from './components/Github.jsx'
// const router = createBrowserRouter(           //defining the router variable used in router provider
//   [
//     {
//       path:'/',
//       element: <AppOrLayout />,
//       children: [
//         {
//           path:"",
//           element:<Home />
//         },
//         {
//           path:'About',
//           element:<About />
//         },
//         {
//           path:"Contact-Me",
//           element:<ContactMe />
//         },
//         {
//           path:"My-Projects",
//           element:<Projects />
//         }]
//     }
// ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppOrLayout/>} >
      <Route path="" element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='ConTact-Me' element={<ContactMe />}/>
      <Route path='My-projects' element={<Projects />}/>
      <Route path='User/:userid' element={<User />}/>
      <Route path='Git-Hub' element={<Github />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   < RouterProvider router={router} /> 
  </StrictMode>,                     
  // using router provider for importting or rendering the file 
  // because files are not rendering in App.jsx due to use of react router dom    
)
