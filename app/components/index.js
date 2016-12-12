import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/addTodo'
import VisibleTodosList from '../containers/visibleTodosList'


const App = () =>
  <div>
    <AddTodo />
    <VisibleTodosList />
    <Footer />
  </div>

export default App
