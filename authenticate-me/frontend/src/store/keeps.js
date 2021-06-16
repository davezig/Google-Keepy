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

const initialState = {
  keep1: {
    name: 'Programming Projects',
    tasks: {
      task1: {
        description: 'Test thing ashlgshg;alghslghslgslghslghsalgs',
        isComplete: true,
        position: 0,
      },
      task2: {
        description: 'Other thing',
        isComplete: false,
        position: 3760746300,
      },
      task3: {
        description: 'Third things to do',
        isComplete: true,
        position: 1,
      },
      task4: {
        description: 'These are dynamic now',
        isComplete: false,
        position: 9,
      },
      task5: {
        description: 'boom boom position is 2',
        isComplete: true,
        position: 2,
      },
    },
  },
  keep2: {
    name: 'Shopping Lists',
    tasks: {
      task1: {
        description: 'Milk',
        isComplete: true,
        position: 0,
      },
      task2: {
        description: 'Cereal',
        isComplete: false,
        position: 3760746300,
      },
      task3: {
        description: 'Dog food',
        isComplete: true,
        position: 1,
      },
      task4: {
        description: 'Peanut butter',
        isComplete: false,
        position: 9,
      },
      task5: {
        description: 'Ramen',
        isComplete: true,
        position: 2,
      },
    },
  },
};

const keepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TASK:
      return { ...state, any: 'nothing' };
    default:
      return state;
  }
};

export default keepsReducer;
