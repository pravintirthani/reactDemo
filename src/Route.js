import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import {App} from './App'
import { Provider } from 'react-redux'

class Route extends Component {

render(){
    return(
        <BrowserRouter>
            <Provider store={this.props.store}>
                <App />
            </Provider>
        </BrowserRouter>        
        )
    }
}    

export default Route;