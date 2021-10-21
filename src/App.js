import React, { useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux';
import Userscont from './userscont';
import { additemn, decrement, increment, logout, USR } from './actions/index'


function App() {
  const count = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLoggedIn)
  const dispatch = useDispatch()



  return (
    <div className="App">


      <Userscont />


    </div>
  );
}

export default App;
