import axios from 'axios'
export const increment = () => {
    return {
        type: 'increment'
    }
}

export const decrement = () => {
    return {
        type: 'decrement'
    }
}

export const logout = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const additemn = () => {
    return {
        type: 'ADD_ITEM'
    }
}

//----------------- REQ ACTIONS
export const URQ = () => {
    return {
        type: 'User_REQ'
    }
}

export const URQS = (users) => {
    return {
        type: 'User_REQ_S',
        payload: users
    }
}

export const URQF = () => {
    return {
        type: 'User_REQ_F'
    }
}


export function USR() {
    return (dispatch) => {

        dispatch(URQ())

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(URQS(users))
            })
            .catch(error => {
                const errorM = error.message
                dispatch(URQF())
            })
    }
}


