import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Menu from './components/menu/Menu'
import MainBody from './components/mainbody/MainBody'
function App() {

  return (
    <ChakraProvider>
      <div className='flex p-2'>
        <Menu />
        <MainBody />
      </div>

    </ChakraProvider>
  )
}

export default App
