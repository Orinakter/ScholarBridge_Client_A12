import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routers/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer></ToastContainer>
   </AuthProvider>
  </StrictMode>,
)
