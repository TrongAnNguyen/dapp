import { Router } from 'react-router-dom'
import ResetCSS from 'style/ResetCSS'
import GlobalStyle from 'style/Global'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import Routers from 'routers'
import { memo } from 'react'
import history from './routerHistory'

const App: React.FC = () => (
  <Router history={history}>
    <ResetCSS />
    <GlobalStyle />
    <SuspenseWithChunkError fallback={null}>
      <Routers />
    </SuspenseWithChunkError>
  </Router>
)

export default memo(App)
