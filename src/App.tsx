import React, { useState } from 'react';
import './App.scss';
import NavigationLogged from './components/Navigation/NavigationLogged';
import TheNavigation from './components/Navigation/TheNavigation';
import TheRoute from './components/Navigation/TheRoute';


function App() {

  const [user, setUser] = useState(localStorage.getItem('user'));

  const checkAuth = () => {
    setUser(localStorage.getItem('user'));
  }
  
  return (
    < div className="App-content min-vh-100" >
      <header>
        {user ? <NavigationLogged checkAuth={checkAuth} /> : <TheNavigation checkAuth={checkAuth}/>}
      </header>

      <main >
        <TheRoute checkAuth={checkAuth}></TheRoute>
      </main>
      <footer className="d-flex justify-content-center">
      </footer>
    </div >
  );
}


export default App;
