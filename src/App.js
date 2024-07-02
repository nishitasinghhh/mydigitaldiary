import logo from './logo.svg';
import {HashRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import {auth} from '/Users/nishitasingh/Desktop/mydigitaldiary/src/firebase-config.js'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import {signOut} from 'firebase/auth'


function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));
  const signUserOut=()=>{
      signOut(auth).then(()=>{
       localStorage.clear()
       setIsAuth(false)
       window.location.pathname='/login'
      })
  }
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        
        {!isAuth ? (<Link to='/login'>Login</Link>):
        (<>
        <Link to='/createpost'>Create Post</Link>
        <Link onClick={signUserOut} className='newbtn'>Log out</Link>
        </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>}/>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>}/>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
