function userReducer(state = {}, action){
    switch (action.type) {
        case "CREATE_USER":
            return { ...action.payload };
        case "GET_USER":
            return { ...action.payload };
        case "CHANGE_BAL":
            return { ...state, account: action.payload };
        case "UPDATE_TRANSACTION":
            return { ...state, ...action.payload };
        case "UPDATE_PROFILE":
            return { ...state, ...action.payload };
        case "UPDATE_PFP":
            return { ...state, ...action.payload };
        case "UPDATE_KYC":
            return { ...state, ...action.payload };
        case "APPLY_CARD":
            return { ...state, ...action.payload };
        case "CHANGE_PASSWORD":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default userReducer;