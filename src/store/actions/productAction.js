export const add = (product) => {
    return ({
        type: "add",
        payload: product
    })
}

export const remove = (id) => {
    return ({
        type: 'remove',
        payload: id
    })
}