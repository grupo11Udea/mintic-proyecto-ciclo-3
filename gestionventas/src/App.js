/*import logo from './logo.svg';*/
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ContenedorLoging from './Components/ContenedorLoging/ContenedorLoging';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import Producto from './Components/Producto/Producto';
import Venta from './Components/Venta/Venta';

//import Ferreteria from './Components/Producto/Ferreteria/Ferreteria';

function App() {


  
  
  return (
        
    <>
     <Header />
       <Footer/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/ContenedorLoging" />
          </Route>
          <Route exact path='/ContenedorLoging' component={ContenedorLoging}/>
          <Route exact path='/Producto' component={Producto}/>
          <Route exact path='/Venta' component={Venta}/>
          {/*<Route exact path='/Ferreteria' component={Ferreteria}/>*/}
        </Switch>
      </Router>
      
     
  
  
    </>
    

  );
}

export default App;
