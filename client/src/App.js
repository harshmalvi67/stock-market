import logo from './logo.svg';
import './App.css';
import Header from './views/header';
import Footer from './views/footer';
import Dashboard from './views/dashboard';
import Stock from './views/stock';
import {BrowserRouter as Router,
        Link,
        Route,
        Switch
      } from 'react-router-dom';
function App() {
  return (
    <div className="App container-sm">
      <Header/>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Dashboard/>
          </Route>
          <Route exact path = '/about'>
              Eroor
          </Route>
          <Route exact path = "/stock/:stock">
            <Stock/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
