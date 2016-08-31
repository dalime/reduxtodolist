export default function todos(state = ['a thing'], action) {
  switch(action.type) {
    case 'CREATE_TODO':
      return state.concat(action.payload.todo);
      break;
    default:
      return state;
  }
}
