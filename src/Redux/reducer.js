import { combineReducers } from 'redux';
import {COUNT_INCREMENT,COUNT_DECREMENT, PUSH, POP} from './action'
import { countInitialState } from './initialstate';

export const countreducer = (state =countInitialState, action )=>{
    switch (action.type) {
        case COUNT_INCREMENT:{
           return {...state, count : state.count+1};
           break
        }
        case COUNT_DECREMENT:{
            return {...state, count : state.count-1};
            break
         }
        default:
            return state
    }
}

const arrayReducre = (state = [], action )=>{
    switch (action.type) {
        case PUSH:{
            const data = [...state]
            data.push(action.value)
            return [...data]
            break;
        }
        case POP:{
            const data = [...state]
            data.pop()
            return [...data]
            break;
        }
        default:
            return state
    }
}


const rootReducer = combineReducers({
        counting : countreducer,
        arraying : arrayReducre
    }
)
export default rootReducer