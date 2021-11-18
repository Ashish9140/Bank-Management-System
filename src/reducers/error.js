function errorReducer(state = {}, action){
    if (action.type === "HANDLE_ERROR") {
        return {message: action.payload}
    }
    return state;
}

export default errorReducer;