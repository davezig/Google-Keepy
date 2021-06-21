const CREATE_TASK = 'keeps/createTask';
const UPDATE_TASK = 'keeps/updateTask';
const CREATE_KEEP = 'keeps/createNewKeep';

const createTask = (keep, taskId, task) => {
  return {
    type: CREATE_TASK,
    keep,
    taskId,
    task,
  };
};

const updateTask = (keep, taskId, task) => {
  return {
    type: UPDATE_TASK,
    keep,
    taskId,
    task,
  };
};

const createNewKeep = (keep, taskId, task) => {
  return {
    type: CREATE_KEEP,
    keep,
    taskId,
    task,
  };
};

export const createTaskThunk = (keep, task) => async (dispatch) => {
  //   if response is 200
  console.log(keep, task);
  if (true) {
    const randomTaskId = Math.random();
    dispatch(createTask(keep, randomTaskId, task));
  }
  //   return response;
};

export const updateTaskThunk = (keep, taskId, task) => async (dispatch) => {
  //   if response is 200
  if (true) {
    dispatch(updateTask(keep, taskId, task));
  }
  //   return response;
};

export const createNewKeepThunk = (keep, task) => async (dispatch) => {
  //   if response is 200
  console.log(keep, task);
  if (true) {
    const randomTaskId = Math.random();
    dispatch(createTask(keep, randomTaskId, task));
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
    case CREATE_TASK:
      return {
        ...state,
        [action.keep]: {
          ...state[action.keep],
          tasks: {
            ...state[action.keep].tasks,
            [action.taskId]: action.task,
          },
        },
      };

    case UPDATE_TASK:
      return {
        ...state,
        [action.keep]: {
          ...state[action.keep],
          tasks: {
            ...state[action.keep].tasks,
            [action.taskId]: {
              ...state[action.keep].tasks[action.taskId],
              ...action.task,
            },
          },
        },
      };
    default:
      return state;
  }
};

const newKeepReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_KEEP:
      return {
        ...state,
        [action.keep]: {
          ...state[action.keep],
          tasks: {
            ...state[action.keep].tasks,
            [action.taskId]: action.task,
          },
        },
      };

    case UPDATE_TASK:
      return {
        ...state,
        [action.keep]: {
          ...state[action.keep],
          tasks: {
            ...state[action.keep].tasks,
            [action.taskId]: {
              ...state[action.keep].tasks[action.taskId],
              ...action.task,
            },
          },
        },
      };
    default:
      return state;
  }
};

export default keepsReducer;
