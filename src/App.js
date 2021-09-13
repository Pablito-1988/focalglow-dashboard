
import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Error from './components/Error404/Error404'
import Us from './components/Us/Us'
import ProductList from './components/ProductList/ProductList';
import ProductCreate from './components/ProductCreate/ProductCreate'
import ProductEdit from './components/ProductEdit/ProductEdit';
import { Switch, Route } from 'react-router-dom'
import Sales from './components/Sales/Sales';


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
        <Route exact path='/products'>
          {<ProductList />}
        </Route>
        <Route exact path='/sales'>
          {<Sales />}
        </Route>
        <Route exact path='/create'>
          {<ProductCreate />}
        </Route>
        <Route exact path='/edit/:id'>
          {<ProductEdit />}
        </Route>
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
