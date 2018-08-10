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
} from '../Constants/actionTypes';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOAD_TODO:
      return { ...state, loading: true };
    case LOAD_TODO_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case LOAD_TODO_FAIL:
      return { ...state, loading: false, error: action.payload };

    case POST_TODO:
      return { ...state, loading: true };
    case POST_TODO_SUCCESS:
      return { ...state, loading: false, data: [...state.data, action.payload] };
    case POST_TODO_FAIL:
      return { ...state, loading: false, error: action.payload };

    case PUT_TODO:
      return { ...state, loading: true };
    case PUT_TODO_SUCCESS: {
      const index = state.data.findIndex(x => x.id === action.payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.splice(0, index), action.payload, ...state.data.splice(index + 1)],
      };
    }
    case PUT_TODO_FAIL:
      return { ...state, loading: false, error: action.payload };

    case DELETE_TODO:
      return { ...state, loading: true };
    case DELETE_TODO_SUCCESS: {
      const index = state.data.findIndex(x => x.id === action.payload);
      return {
        ...state,
        loading: false,
        data: [...state.data.splice(0, index), ...state.data.splice(index + 1)],
      };
    }
    case DELETE_TODO_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
