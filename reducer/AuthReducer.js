export const AuthReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                isError: false,
                isLoading: false,
                isAuth: true,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                isError: false,
                isLoading: false,
                isAuth: false,
                user: null
            }
        default:
            return state
    }
}