import actions from './actionconst'

const initState = {
    uid: null,
    selected : {
        AAPL: true,
        MSFT: false,
        FB: false,
        AMZN: false
    },
    visible : {
        AAPL: true,
        MSFT: true,
        FB: true,
        AMZN: true
    },
    weights: {
        AAPL: 25
    },
    decisions: {
        AAPL: false
    },
    message: "Choose atleast 3 and upto 10 stocks"
}

const reducer = (state = initState, action) => {
    const payload = action.payload
    switch (action.type) {
        case actions.LOGIN: {
            const uid = payload.uid
            return ({ ...state, uid: uid })
        }
        case actions.LOGOUT: {
            return ({ ...state, uid: null})
        }
        case actions.TOGGLE_SELECTION: {
            const stock = payload.stock
            const isSelected = state.selected[stock]
            let newState = {}
            if (isSelected) {
                // remove from weights and decision
                const {[stock]: w, ...newWeights} = state.weights
                const {[stock]: d, ...newDecisions} = state.decisions
                newState = {
                    ...state,
                    selected: {...state.selected, [stock]: false},
                    weights: newWeights,
                    decisions: newDecisions
                }
            } else {
                newState = {
                    ...state,
                    selected: {...state.selected, [stock]: true},
                    weights: { ...state.weights, [stock]: 0 },
                    decisions: { ...state.decisions, [stock]: false}
                }
            }
            console.log(newState)
            return newState
        }
        case actions.TOGGLE_VISIBILITY: {
            const searchPhrase = payload.searchPhrase
            let updateVisible = {}
            for (const stock in state.visible) {
                if(stock.includes(searchPhrase)) updateVisible[stock] = true
                else updateVisible[stock] = false
            }
            return ({
                ...state,
                visible: { ...state.visible, ...updateVisible }
            })}
        case actions.TOGGLE_DECISION: {
            const stock = payload.stock
            return({
                ...state,
                decisions: {...state.decisions, [stock]: !state.decisions[stock]}
            })
        }
        case actions.INCREMENT_WEIGHT: {
            const stock = payload.stock
            let totalWeight = 0
            for (const stock in state.weights) {
                totalWeight += state.weights[stock]
            }
            if (state.weights[stock] === 100 || totalWeight === 100) 
                return({ ...state, message: "Weight limit reached" })
            else return({
                ...state,
                weights: { ...state.weights, [stock]: state.weights[stock] + 5}
            })
        }
        case actions.DECREMENT_WEIGHT: {
            const stock = payload.stock
            let totalWeight = 0
            for (const stock in state.weights) {
                totalWeight += state.weights[stock]
            }
            if (state.weights[stock] === 0 || totalWeight === 0) 
                return({ ...state, message: "Weight cant be negative" })
            else return({
                ...state,
                weights: { ...state.weights, [stock]: state.weights[stock] - 5}
            })
        }
        default:
            return state
    }
}

export default reducer