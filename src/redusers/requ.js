const initialState = {
    users: [],
    loading: false,
    fild: false
}

function requeReduser(state = initialState, action) {
    switch (action.type) {
        case "User_REQ":
            return {
                loading: true,
                fild: false,
                users: ['ss']
            }

        case "User_REQ_S":
            return {
                users: action.payload,
                loading: false,
                fild: false
            }

        case "User_REQ_F":
            return {
                fild: true,
                loading: false,
                users: ['asda']
            }
        default:
            return state;
    }
}

export default requeReduser;