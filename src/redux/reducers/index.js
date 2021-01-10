const initialState = {
    counter: 0
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {       
        case 'CLICK_BUTTON': {
            return {...state,
                counter: state.counter + action.payload < 0 ?
                        0:
                        state.counter + action.payload};
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