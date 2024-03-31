import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import { Projects } from './components/Projects/Projects'
import News from './components/News/News'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { createTheme, ThemeProvider } from '@mui/material'

function App() {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        mb: 450,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <About/>
      <Projects/>
      <News/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
