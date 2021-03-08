import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

function TodoList({ todos, onTodClick }) {
    return (
        <ul>
            {
                todos && todos.map((todo, index) => (
                    <Todo key={index} {...todo} onClick
                    ={() => onTodClick(index)}  />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodClick: PropTypes.func.isRequired

}

export default TodoList

