import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Menu from './components/menu/Menu'
import MainBody from './components/mainbody/MainBody'
import customTheme from './Themes/customeTheme'
function App() {

  return (
    <ChakraProvider theme = {customTheme}>
      <div className='flex p-2'>
        <Menu />
        <MainBody />
      </div>

    </ChakraProvider>
  )
}

export default App
