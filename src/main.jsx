
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import MainLayouts from './layouts/MainLayouts.jsx';
import Blog from './pages/Blog.jsx';



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
        loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>,
      },
      {
        path: '/blog/:id',
        element: <Blog></Blog>,
        loader: ({params})=> fetch (`https://dev.to/api/articles/${params.id}`)
      }
    ]
  },
  

]);




ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}></RouterProvider>
  
)
