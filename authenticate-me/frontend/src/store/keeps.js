const UPDATE_TASK = 'keeps/updateTask';

const updateTask = (id, task) => {
  return {
    type: UPDATE_TASK,
    id,
    task,
  };
};

export const updateTaskThunk = (id, task) => async (dispatch) => {
  //   if response is 200
  if (true) {
    dispatch(updateTask(id, task));
  }
  //   return response;
};

const initialState = {};

const keepsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_TASK:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    default:
      return state;
  }
};
