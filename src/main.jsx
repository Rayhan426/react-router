
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'







ReactDOM.createRoot(document.getElementById('root')).render(
 <> 
 <RouterProvider router={router}></RouterProvider>
  <Toaster></Toaster>
 
  </>
  
)
