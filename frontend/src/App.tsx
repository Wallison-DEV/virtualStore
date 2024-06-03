import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from "./styles"
import LightTheme from './Themes/light'
import DarkTheme from './Themes/dark'
import Rotas from './routes'

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true)

  return (
    <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
