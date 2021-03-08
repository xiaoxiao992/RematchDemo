import React from 'react'
import { connect } from 'react-redux'

function Countpage(props) {
    return (
        <div>
            The count is {props.count}
            <button onClick={props.increment}>increment</button>
            <button onClick={props.incrementAsync}>incrementAsync</button>
        </div>
    )
}

const mapState = state => ({
    count: state.count
})

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
    increment: () => increment(1),
    incrementAsync: () => incrementAsync(1)
})

export default connect(mapState, mapDispatch)(Countpage)
