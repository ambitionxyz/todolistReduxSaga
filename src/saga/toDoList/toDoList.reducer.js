import * as Types from './toDoList.type';

const initialState = {
  list: [],
  job: null,
  totalPages: 0,
  loading: false,
  error: null,
};

const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case Types.FETCH_REQUEST: {
      console.log('dang load');
      return { ...state, loading: true };
    }
    case Types.FETCH_SUCCESS: {
      // console.log('them thanh cong', action.payload);
      return {
        ...state,
        list: action?.payload ? action?.payload?.reverse() : [],
        totalPages: action?.payload?.length ? Math.ceil(action?.payload?.length / 10) : 0,
        loading: false,
      };
    }
    case Types.FETCH_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }

    // case Types.PUT_REQUEST: {
    //   return { ...state, loading: true };
    // }
    // case Types.PUT_SUCCESS: {
    //   return { ...state, loading: false };
    // }
    // case Types.PUT_FAILURE: {
    //   return { ...state, loading: false, error: action.error };
    // }

    // PUT / POST
    case Types.PATCH_REQUEST: {
      return { ...state, loading: true };
    }
    case Types.PATCH_SUCCESS: {
      return { ...state, loading: false };
    }
    case Types.PATCH_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }

    // GET
    case Types.GET_REQUEST: {
      return { ...state, loading: true };
    }
    case Types.GET_SUCCESS: {
      return { ...state, loading: false, job: action.payload };
    }
    case Types.GET_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }

    // DELETE
    case Types.DELETE_REQUEST: {
      return { ...state, loading: true };
    }
    case Types.DELETE_SUCCESS: {
      return { ...state, loading: false };
    }
    case Types.DELETE_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }

    default:
      return state;
  }
};

export default toDoListReducer;
