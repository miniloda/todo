import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './Themes/customeTheme'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <ChakraProvider theme = {customTheme}>
      <div>

        <Outlet />
      </div>

    </ChakraProvider>
  )
}

export default App
