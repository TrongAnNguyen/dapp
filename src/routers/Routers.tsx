import { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('views/Home'))

const Routers = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
  </Switch>
)

export default Routers
