const textReducer = (state = {}, action) => {
    switch (action.type) {
        case "PLACEHOLDER_TEXT":
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

export default textReducer;
