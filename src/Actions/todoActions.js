import Api, { Action } from '../utils/apiUtil';
import {
  LOAD_TODO,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAIL,
  POST_TODO,
  POST_TODO_SUCCESS,
  POST_TODO_FAIL,
  PUT_TODO,
  PUT_TODO_SUCCESS,
  PUT_TODO_FAIL,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  SHOW_OPEN_TASKS,
  SHOW_COMPLETED_TASKS,
} from '../Constants/actionTypes';

const url = 'http://localhost:3000/Todo/';

export function getTodo() {
  return (dispatch) => {
    dispatch(Action(LOAD_TODO));
    Api.jsonService(url)
      .then(json => dispatch(Action(LOAD_TODO_SUCCESS, json)))
      .catch(err => dispatch(Action(LOAD_TODO_FAIL, err)));
  };
}

export function postTodo(data) {
  return (dispatch) => {
    dispatch(Action(POST_TODO));
    Api.jsonService(url, 'POST', data)
      .then(json => dispatch(Action(POST_TODO_SUCCESS, json)))
      .catch(err => dispatch(Action(POST_TODO_FAIL, err)));
  };
}

export function putTodo(id, data) {
  return (dispatch) => {
    dispatch(Action(PUT_TODO));
    Api.jsonService(`${url}${id}`, 'PUT', data)
      .then(json => dispatch(Action(PUT_TODO_SUCCESS, json)))
      .catch(err => dispatch(Action(PUT_TODO_FAIL, err)));
  };
}

export function deleteTodo(id) {
  return (dispatch) => {
    dispatch(Action(DELETE_TODO));
    Api.jsonService(`${url}${id}`, 'DELETE')
      .then(() => dispatch(Action(DELETE_TODO_SUCCESS, id)))
      .catch(err => dispatch(Action(DELETE_TODO_FAIL, err)));
  };
}

export function showOpenTasks() {
  return (dispatch) => {
    dispatch(Action(SHOW_OPEN_TASKS));
  };
}

export function showCompletedTasks() {
  return (dispatch) => {
    dispatch(Action(SHOW_COMPLETED_TASKS));
  };
}
