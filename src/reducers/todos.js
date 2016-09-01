export default function todos(state = [], action) {
  switch(action.type) {
    case 'CREATE_TODO':
      return state.concat(action.payload.todo);
      break;
    case 'DELETE_TODO':
      return state.filter((todo, index) => {
        if (index === action.payload.index) return false;
        return true;
      })
      break;
    case 'EDIT_TODO':
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          return action.payload.todo;
        } else {
          return todo;
        }
      });
      break;
    case 'SORT_TODOS':
      return state.sort();
      break;
    default:
      return state;
  }
}
