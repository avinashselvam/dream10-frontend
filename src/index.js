import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import firebase from './firebase'
import { login } from './actions'

const store = createStore(reducer)

firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
        const uid = user.uid
        store.dispatch(login(uid))
    }
})


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter> <App /> </BrowserRouter>
    </Provider>,
document.getElementById('root'))