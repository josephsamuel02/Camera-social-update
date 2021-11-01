

const textReducer = ( state={}, action) => {
    switch (action.type){
        case "PLACEHOLDER_TEXT":
            return {...state, Placeholder: action.payload }

            default: return state;
    }


}


export default textReducer;