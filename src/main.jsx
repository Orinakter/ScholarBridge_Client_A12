import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routers/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ThemeProvider from './AuthProvider/ThemeProvider.jsx'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <QueryClientProvider client={queryClient}>
     <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer></ToastContainer>
   </AuthProvider>
    </QueryClientProvider>
    </ThemeProvider>
   
  </StrictMode>,
)
