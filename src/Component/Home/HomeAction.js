import * as action from '../ActionRegister';

export function addTodo(data) {
  return(dispatch)=> {
  type: 'ADD_TODO',
    this.fetch(data);
  };
}
export function getTodo(data) {
  return(dispatch)=> {
  type: 'GET_TODO',
    this.fetch(data);
  };
}
export function deleteTodo(data) {
  return(dispatch)=> {
  type: 'DELETE_TODO',
    this.fetch(data);
  };
}
export function updateTodo(data) {
  return(dispatch)=> {
  type: 'UPDATE_TODO',
    this.fetch(data);
  };
}