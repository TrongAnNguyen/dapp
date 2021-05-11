import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Provider } from 'react-redux'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { getLibrary } from './utils/web3React'
import store from './state'

interface Props {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </Provider>
  </Web3ReactProvider>
)

export default Providers
