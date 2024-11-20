import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styled/Theme.js'
import GlobalStyle from './styled/global.js'
import './styled/fonts.js'
import { StyleSheetManager } from 'styled-components'
import emotionIsPropValid from '@emotion/is-prop-valid'
import { StrictMode } from 'react'
import App from './App.jsx'
import ScrollToTop from './Utils/scrollToTop.js'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyleSheetManager shouldForwardProp={emotionIsPropValid}>
          <App />
        </StyleSheetManager>
      </ThemeProvider>
    </Router>
  </StrictMode>,
)
