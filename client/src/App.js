import logo from './logo.svg';
import './App.css';
import Header from './views/header';
import Footer from './views/footer';
import Dashboard from './views/dashboard';
import Stock from './views/stock';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Registeration from './views/registeration';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/signup">
          <Registeration />
        </Route>
        <Route path="/stock/:stock">
          <Stock />
        </Route>
      </Router>
      <Footer />
    </>
  );
}

export default App;
