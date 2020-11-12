import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import './assets/index.css'
import RouterView from './widgets/RouterView'

ReactDOM.render(
    <BrowserRouter>
        <RouterView />
    </BrowserRouter>,
    document.getElementById('root')
)
