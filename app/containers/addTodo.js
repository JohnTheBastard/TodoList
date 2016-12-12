import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={ (node) => {
            input = node
        }}
        placeholder='Add Todo'
        type='text'
        />
        <input type='submit' value='New Todo' />
      </form>
    </div>
  )
}


AddTodo = connect()(AddTodo)



export default AddTodo
