import * as redux from 'redux'
import rootReducer, { countreducer } from './reducer';


const store = redux.createStore(rootReducer)

export default store;