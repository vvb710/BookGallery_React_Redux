const initialState = {
    query: ''
}

const queryReducer = (state = initialState, action) => {
    if (action.type == "QUERY") {
        return {
            ...state,
            query: action.data
        }
    }
    return state;
}

export default queryReducer;