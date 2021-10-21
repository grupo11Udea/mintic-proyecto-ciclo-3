import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Producto from './Components/Home/Producto';
import Venta from './Components/Home/Venta';
import Home from './Components/Home/Home';
import Usuarios from './Components/Home/Usuarios';
import ProtectedRoute from './Components/Login/ProtectedRoute';
import ActualizacionVenta from './Components/Home/ActualizacionVenta';
import './app.css';

//import Ferreteria from './Components/Producto/Ferreteria/Ferreteria';

function App() {
  
  return (
    <>
    <div className="app-container">
      <Header />
      <div>
      <Router className="app-router">
        <Switch>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <Route exact path='/Login' component={Login} />
          <ProtectedRoute exact path='/Producto' component={Producto} />
          <ProtectedRoute exact path='/Venta' component={Venta} />
          <ProtectedRoute exact path='/Home' component={Home} />
          <ProtectedRoute exact path='/Usuarios' component={Usuarios} />
          <ProtectedRoute exact path='/ActualizarVenta' component={ActualizacionVenta} />
          {/*<Route exact path='/Ferreteria' component={Ferreteria}/>*/}
        </Switch>
      </Router>
      </div>
      <Footer className="app-footer"/>
    </div>
    </>
  );
}

export default App;
