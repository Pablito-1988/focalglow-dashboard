
import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Error from './components/Error404/Error404'
import Us from './components/Us/Us'
import { Switch , Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          {<Main />}
        </Route>
        <Route exact path='/us'>
          {<Us />}
        </Route>
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
