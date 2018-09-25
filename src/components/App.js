import React from 'react';
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'
import {
    handleInitialData
} from '../actions/shared'

class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props
        // The handleInitialData returns an 'API' object onto the window object
        dispatch(handleInitialData())

        // forceUpdate is used to cause a re-render as we have no state in React to trigger the update on state change
        // store.subscribe(() => this.forceUpdate())
    }

    render() {
        const { loading } = this.props

        if (loading === true) {
            return <h3>Loading</h3>
        }
        return (
            <div>
                <ConnectedTodos />
                <ConnectedGoals />
            </div>
        )
    }
}

// connect: This will render any component, passing to the component any data it needs from the store.
// It uses Context.Consumer under the hood
export default connect((state) => ({
    loading: state.loading
}))(App)
