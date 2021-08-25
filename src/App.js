import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Contato from './pages/Contato';
import Curriculo from './pages/Curriculo';
import Home from './pages/Home';
import Projetos from './pages/Projetos';

function App() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/curriculo" component={Curriculo} />
        <Route exact path="/projetos" component={Projetos} />
        <Route exact path="/contato" component={Contato} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
