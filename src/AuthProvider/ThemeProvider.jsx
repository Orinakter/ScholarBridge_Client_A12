import { createContext, useState } from "react"
export const ThemeContext = createContext(null)



const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false)
    
  
   const themeInfo ={
    theme,
    setTheme
   }
   
  return (
   <ThemeContext.Provider value={themeInfo}>
    {children}
   </ThemeContext.Provider> 
  )
}

export default ThemeProvider