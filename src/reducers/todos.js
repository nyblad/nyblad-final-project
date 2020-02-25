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
    addTodo: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, completed: false })
    },
    removeTodo: (state, action) => {
      // Filter and display new array with the todo that don't match the payloads todo id
      state.items = state.items.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo: (state, action) => {
      // To find the todo we want to toggle
      const foundTodo = state.items.find((todo) => todo.id === action.payload)

      // To change completed status on that todo
      if (foundTodo) {
        foundTodo.completed = !foundTodo.completed
      }
    }
    // removeAllTodos: (state) => {
    //   // return initialState (gives same result as below)
    //   state.items = []
    // }
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
        dispatch(todos.actions.setGuests(json.todos))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk middleware for post a todo
// todo = the formvalues I'm sending with dispatch on form submit for todo
export const sendTodos = (todo) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/todos`, {
      method: "POST", body: JSON.stringify(todo), headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        // Dispatching the form values to the action to add guest
        dispatch(todos.actions.addGuest(todo))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk middleware for updating a todo
export const updateTodos = (todoId) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/todos/${todoId}`, {
      method: "PUT"
    })
      .then(() => {
        dispatch(todos.actions.updateGuest(todoId))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk middleware for deleting a todo
export const deleteTodos = (todoId) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://nyblad-final-project-api.herokuapp.com/todos/${todoId}`, {
      method: "DELETE"
    })
      .then(() => {
        dispatch(todos.actions.deleteGuest(todoId))
        dispatch(ui.actions.setLoading(false))
      })
  }
}