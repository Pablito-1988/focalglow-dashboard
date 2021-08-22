
import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Error from './components/Error404/Error404'
import { Switch , Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/home'>
          {<Body />}
        </Route>
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
