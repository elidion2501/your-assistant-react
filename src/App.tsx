import './App.scss';
import { Switch, Route } from "react-router-dom";
import TheNavigation from './components/Navigation/TheNavigation';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Home from './views/Home';

import { getUser } from './redux/User/user.slice';
import { useSelector } from 'react-redux';


function App() {


  return (
    <div className="App-content min-vh-100">
      <header   >
        <TheNavigation />
      </header>

      <main >
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/sign-up" component={SignUp}></Route>
        </Switch>

      </main>
      <footer className="d-flex justify-content-center">
      </footer>
    </div >
  );
}
export default App;
