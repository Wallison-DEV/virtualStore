import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Login from "./Pages/Login"

import { Container, GlobalStyle } from "./styles"
import LightTheme from './Themes/light'
import DarkTheme from './Themes/dark'

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true)

  return (
    <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <Container>
        <Login />
      </Container>
    </ThemeProvider>
  )
}

export default App
