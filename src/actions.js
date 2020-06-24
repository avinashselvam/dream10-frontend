import actions from './actionconst'

export const login = (uid) => {
    return({
        type: actions.LOGIN,
        payload: {
            uid
        }
    })
}

export const logout = () => {
    return({
        type: actions.LOGOUT
    })
}

export const toggleSelection = (stock) => {
    return({
        type: actions.TOGGLE_SELECTION,
        payload: {
            stock
        }
     })
}

export const toggleVisibility = (searchPhrase) => {
    return({
        type: actions.TOGGLE_VISIBILITY,
        payload: {
            searchPhrase
        }
     })
}

export const toggleDecision = (stock) => {
    return({
        type: actions.TOGGLE_DECISION,
        payload: {
            stock
        }
    })
}

export const increment = (stock) => {
    return({
        type: actions.INCREMENT_WEIGHT,
        payload: {
            stock
        }
    })
}

export const decrement = (stock) => {
    return({
        type: actions.DECREMENT_WEIGHT,
        payload: {
            stock
        }
    })
}