import React from 'react'
import store from '../Redux/store';
import { countIncrementAction, countDecrementAction, pushAction, popAction} from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux';

const App=()=> {


  const count = useSelector((state)=>state.counting.count)
  const dispatch =  useDispatch()
  const increment = () =>{
    dispatch(countIncrementAction())
    // console.log('Increment >>>>>>::::', store.getState());
  }
    const decrement = () =>{
    store.dispatch(countDecrementAction())
    //console.log('Decrement >>>>>>::::', store.getState());
  }
  const push = () =>{
    store.dispatch(pushAction())
    console.log('Push>>>>>>::::', store.getState());
  }
  const pop = () =>{
    store.dispatch(popAction())
    console.log('Pop >>>>>>::::', store.getState());
  }
  return (
    <div className="App">
      <h1>React Redux Learn</h1>
      <h3>
        Count Value{count}
      </h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={push}>Push</button>
      <button onClick={pop}>Pop</button>
    </div>
  );
}

export default App;
