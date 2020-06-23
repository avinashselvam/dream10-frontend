import actions from './actionconst'

const initState = {
    uid: null,
    selected : {
        AAPL: false,
        MSFT: false,
        FB: false,
        AMZN: false
    },
    visible : {
        AAPL: true,
        MSFT: true,
        FB: false,
        AMZN: true
    },
    weights: {
        AAPL: 25
    },
    decisions: {
        AAPL: false
    }
}

const reducer = (state = initState, action) => {
    const payload = action.payload
    switch (action.type) {
        case actions.LOGIN: {
            const uid = payload.uid
            return ({ ...state, uid: uid })
        }
        case actions.TOGGLE_SELECTION: {
            const stock = payload.stock
            const isSelected = state.selected[stock]
            let newState = {}
            if (isSelected) {
                // remove from weights and decision
                newState = {
                    ...state,
                    selected: {...state.selected, [stock]: false},
                    weights: { stock, ...state.weights },
                    decisions: { stock, ...state.decisions}
                }
            } else {
                newState = {
                    ...state,
                    selected: {...state.selected, [stock]: true},
                    weights: { ...state.weights, [stock]: 0 },
                    decisions: { ...state.decisions, [stock]: false}
                }
            }
            return newState
        }
        case actions.TOGGLE_VISIBILITY: {
            const stock = payload.stock
            return ({
                ...state,
                visible: {
                    ...state.visible,
                    [stock]: !state.visible[stock]
                }
            })}
        default:
            return state
    }
}

export default reducer