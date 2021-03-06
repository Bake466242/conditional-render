import React from 'react'
import { Link } from 'react-router-dom'
import User from './user'

class Dummy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        const { isLoggedIn } = this.state
        // OR const isLoggedIn = this.state.isLoggedIn
        return (
            <>
            <h1>Hello {(isLoggedIn) ? 'User!' : 'Guest'}</h1>
            <button
             onClick = {() => this.setState({ isLoggedIn: !isLoggedIn })}>
             {(isLoggedIn) ? 'Logout' : 'Sign In'}
             </button>
             <Link to="/todd">Todd</Link>
             <Link to="/becca">Becca</Link>
            </>
        )
    }
}

export default Dummy