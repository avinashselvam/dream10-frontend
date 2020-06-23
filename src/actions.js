import actions from './actionconst'

export const toggleSelection = (stock) => {
    return ({
        type: actions.TOGGLE_SELECTION,
        payload: {
            stock: stock
        }
     })
}

export const toggleVisibility = (stock) => {
    return ({
        type: actions.TOGGLE_VISIBILITY,
        payload: {
            stock: stock
        }
     })
}
