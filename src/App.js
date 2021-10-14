import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Producto from './Components/Home/Producto';
import Venta from './Components/Home/Venta';
import Home from './Components/Home/Home';
import Usuarios from './Components/Home/Usuarios';
import './app.css';


//import Ferreteria from './Components/Producto/Ferreteria/Ferreteria';

function App() {
  
  return (
    <>
      <Header />
     
      <Footer />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Producto' component={Producto} />
          <Route exact path='/Venta' component={Venta} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Usuarios' component={Usuarios} />
          {/*<Route exact path='/Ferreteria' component={Ferreteria}/>*/}
        </Switch>
      </Router>
    </>
  );
}

export default App;
