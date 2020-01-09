const initialState = {
    items: [],
    isLoading: false,
    isError: false,
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DATA_LOADED":
            return {
                ...state,
                items: action.payload,
                isLoading: false,
                isError: false
            }

        case "FETCHING":
            return {
                isLoading: true,
                isError: false
            }

        case "ERROR":
            return {
                isError: true
            }

        default: return state;
    }

}


export default itemReducer;