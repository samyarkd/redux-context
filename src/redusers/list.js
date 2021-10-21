let listState = {
    item: { name: 'hi', value: 100 },
    item2: { name: 'hi', value: '500' },
}

const listReducer = (state = listState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            state = { item: { name: 'hi', value: state.item.value + 100 }, ...state }
            return state


        default:
            return state
    }
}

export default listReducer
