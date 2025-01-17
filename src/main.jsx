import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routers/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer></ToastContainer>
   </AuthProvider>
    </QueryClientProvider>
   
  </StrictMode>,
)
