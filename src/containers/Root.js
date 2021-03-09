import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import configurStore from '../redux/configureStore'
import configureStore from '../redux/configureStore'  // store
import AsyncApp from './AsyncApp'


const store = configureStore()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        )
    }
}
