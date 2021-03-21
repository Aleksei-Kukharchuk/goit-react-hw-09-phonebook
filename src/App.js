import { Suspense, lazy, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from './routes'
import AppBar from './components/AppBar'
import { authOperations } from './redux/auth'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

const HomePage = lazy(() => import('./pages/HomePage'))
const Contacts = lazy(() => import('./components/Contacts'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))

function App({onGetCurrentUser}) {

  useEffect(() => {
    onGetCurrentUser();
  }, [])

  return (
      <>
        <AppBar/>
      
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <PrivateRoute
              path={routes.contacts}
              component={Contacts}
              redirectTo={routes.login}
            />
            <PublicRoute
              path={routes.login}
              restricted
              component={LoginPage}
              redirectTo={routes.contacts}
            />
            <PublicRoute
              path={routes.register}
              restricted
              component={RegisterPage}
              redirectTo={routes.contacts}
            />
          </Switch >
        </Suspense>
      </>
    )
}

/* class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar/>
      
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <PrivateRoute
              path={routes.contacts}
              component={Contacts}
              redirectTo={routes.login}
            />
            <PublicRoute
              path={routes.login}
              restricted
              component={LoginPage}
              redirectTo={routes.contacts}
            />
            <PublicRoute
              path={routes.register}
              restricted
              component={RegisterPage}
              redirectTo={routes.contacts}
            />
          </Switch >
        </Suspense>
      </>
    )
  }
}; */

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App);