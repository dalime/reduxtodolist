export default function todos(state = [], action) {
  switch(action.type) {
    case 'CREATE_TODO':
      return state.concat(action.payload.todo);
      break;
    case 'DELETE_TODO':
      return state.filter((todo, index) => index === action.payload.index ? false : true);
      break;
    case 'EDIT_TODO':
      return state.map((todo, index) => index === action.payload.index ? action.payload.todo : todo);
      break;
    default:
      return state;
  }
}
