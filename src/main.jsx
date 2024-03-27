
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import MainLayouts from './layouts/MainLayouts.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,


    children:[
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>,
      },
    ]
  },
  

]);




ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}></RouterProvider>
  
)
