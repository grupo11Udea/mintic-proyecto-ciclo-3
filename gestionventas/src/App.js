/*import logo from './logo.svg';*/
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ContenedorLoging from './Components/ContenedorLoging/ContenedorLoging';

function App() {
  return (
    <div className="App">
      <Header/>
      <ContenedorLoging/>
      <Footer/>
    </div>
  );
}

export default App;
