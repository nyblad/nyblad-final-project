import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'
// Declaring initialState to use it in the Slice and to return initialState when invoking removeAll()
// const initialState = {
//   items: []
// }

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    setTodos: (state, action) => {
      // To set all todos
      state.items = action.payload
    },
    addTodo: (state, action) => {
      state.items.push({ todo: action.payload })
      console.log(action)
    },
    toggleTodo: (state, action) => {
      // To find the todo we want to toggle
      const foundTodo = state.items.find(todo => todo._id === action.payload)
      // To change completed status on that todo
      if (foundTodo) {
        foundTodo.isCompleted = !foundTodo.isCompleted
      }
    },
    deleteTodo: (state, action) => {
      // Filter and display new array with the todo that don't match the payloads todo id
      state.items = state.items.filter(todo => todo._id !== action.payload)
    }
  }
})

// Thunk middleware for get todos
export const fetchTodos = () => {
  return dispatch => {
    const accessToken = localStorage.getItem('accessToken')
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/todos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(todos.actions.setTodos(json.todos))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk middleware for post a todo
// todo = the formvalues I'm sending with dispatch on form submit for todo
export const sendTodos = (todo) => {
  return dispatch => {
    fetch(`https://nyblad-final-project-api.herokuapp.com/todos`, {
      method: "POST", body: JSON.stringify(todo), headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        console.log(todo)
        // Dispatching the form values to the action to add todo
        dispatch(todos.actions.addTodo(todo))
      })
  }
}

// Thunk middleware for updating a todo
export const updateTodos = (todoId) => {
  return dispatch => {
    fetch(`https://nyblad-final-project-api.herokuapp.com/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({ "isCompleted": true }), // How to toggle this value?
      headers: { "Content-Type": "application/json" }
    })
      // .then(res => res.json())
      .then(() => {
        dispatch(todos.actions.toggleTodo(todoId))
      })
      .catch(err => console.log('error:', err))
  }
}

// Thunk middleware for deleting a todo
export const deleteTodos = (todoId) => {
  return dispatch => {
    fetch(`https://nyblad-final-project-api.herokuapp.com/todos/${todoId}`, { method: "DELETE" })
      .then(() => {
        dispatch(todos.actions.deleteTodo(todoId))
      })
  }
}