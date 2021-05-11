import React, { lazy } from 'react'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'

const Home = lazy(() => import('./views/Home'))

const App: React.FC = () => (
  <SuspenseWithChunkError fallback={null}>
    <Home />
  </SuspenseWithChunkError>
)

export default App
