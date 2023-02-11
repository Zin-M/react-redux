
const productReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'add':
            return payload
        case 'remove':
            return state.filter(value => value.id !== payload)
        default:
            return state
    }

}

export default productReducer;