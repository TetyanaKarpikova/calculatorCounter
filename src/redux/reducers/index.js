const initialState = {
    counter: 0
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER_ONE': {
           console.log('one counter')
            return {...state, counter: state.counter + 1};
        }
        case 'DEC_COUNTER_ONE': {
            return {...state, 
                counter: state.counter - 1 <= 0 ? 
                            0 :
                            state.counter - 1};            
        }
        case 'INC_COUNTER_HUNDRED': {
            return {...state, counter: state.counter + 100};            
        }
        case 'DEC_COUNTER_HUNDRED': {
            return {...state, 
                counter: state.counter - 100 <= 0 ? 
                            state.counter :
                            state.counter - 100};
        }
        case 'RESET_COUNTER': {                     
            return {...state, counter: 0};
        }
        case 'SUBMIT_COUNTER': {              
            return {...state, counter: state.counter + action.payload};
        }

        default: {
            return state;
        }
    }
}