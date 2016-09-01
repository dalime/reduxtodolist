export function createTodo(todo) {
  return {
    type: 'CREATE_TODO',
    payload: { todo }
  }
}

export function deleteTodo(index) {
  return {
    type: 'DELETE_TODO',
    payload: { index }
  }
}

export function editTodo(index, todo) {
  return {
    type: 'EDIT_TODO',
    payload: { index, todo }
  }
}

export function sortTodos() {
  return {
    type: 'SORT_TODOS'
  }
}

// const TodoActions = {
//
// }
//
// export default TodoActions;

//export function deleteTodo(id) {}
