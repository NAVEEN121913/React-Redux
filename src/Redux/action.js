const COUNT_INCREMENT = 'count/increment'
const COUNT_DECREMENT  = 'count/decrement'
const PUSH = 'push'
const POP = 'pop'

const countIncrementAction =()=>( {type:COUNT_INCREMENT })
const countDecrementAction =()=>( {type:COUNT_DECREMENT })
const pushAction = ()=>({type: PUSH})
const popAction = ()=>({type: POP})

export { COUNT_DECREMENT, COUNT_INCREMENT, POP, PUSH, countIncrementAction,countDecrementAction,pushAction,popAction}