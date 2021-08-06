import { csrfFetch } from './csrf';

const CREATE_TASK = 'keeps/createTask';
const UPDATE_TASK = 'keeps/updateTask';
const CREATE_KEEP = 'keeps/createNewKeep';
const READ_KEEPS = 'keeps/readKeeps';

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
// this is an ActionCreator
const createNewKeep = (keep, keepId) => {
  return {
    type: CREATE_KEEP,
    keep,
    keepId,
  };
};

const readKeeps = (keeps) => {
  return {
    type: READ_KEEPS,
    keeps,
  };
};

export const createTaskThunk = (keep, task) => async (dispatch) => {
  task.keepId = keep;
  const response = await csrfFetch('/api/tasks', {
    method: 'POST',
    body: JSON.stringify({ tasks: [task] }),
  });
  //   if response is 200
  if (response.status === 200) {
    const data = await response.json();

    dispatch(createTask(keep, Object.keys(data.tasks)[0], task));
  }
  //   return response;
};

export const updateTaskThunk = (keep, taskId, task) => async (dispatch) => {
  const response = await csrfFetch(`/api/tasks/${taskId}`, {
    method: 'PATCH',
    body: JSON.stringify({ data: task }),
  });
  //   if response is 200
  if (response.status === 200) {
    const { tasks } = await response.json();
    const { description, isComplete, position } = tasks[0];
    dispatch(updateTask(keep, taskId, { description, isComplete, position }));
  }
  //   return response;
};
export const createNewKeepThunk = (title, tasks) => async (dispatch) => {
  // 1. the React Component (newKeep component) invokes thunk action, passes in title and tasks
  // 2. Make fetch request to back end to create new keep in database, pass in title and tasks
  // 3. If no server errors (500), server should return new keep object {title:"title",tasks:{tasks}} and new keepId
  // 4. Pass new keepId and newKeep object into action creator (createNewKeep is the action creator)
  // 5. The switch case (in the reducer function) will take the new keepId and the newKeep object and update the redux store

  //   if response is 200

  // create a keep with a title that is passed in from the user
  const responseKeep = await csrfFetch('/api/keeps', {
    method: 'POST',
    body: JSON.stringify({ title }),
  });

  if (responseKeep.status === 200) {
    const keepData = await responseKeep.json();

    const keep = {
      title,
    };
    // making a task

    const responseTasks = await csrfFetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({
        tasks: tasks.map((task) => {
          return {
            ...task,
            keepId: keepData.keep.id,
          };
        }),
      }),
    });
    if (responseTasks.status === 200) {
      const taskData = await responseTasks.json();
      keep.tasks = taskData.tasks;

      dispatch(createNewKeep(keep, keepData.keep.id));
    }
  }
};

export const getKeepsThunk = () => async (dispatch) => {
  const response = await csrfFetch('/api/keeps', {
    method: 'GET',
  });
  //   if response is 200
  if (response.status === 200) {
    const { keeps } = await response.json();
    dispatch(readKeeps(keeps));
  }
};

const initialState = {
  // keep6: {
  //   title: 'Programming Projects',
  //   tasks: {
  //     task1: {
  //       description: 'Test thing ashlgshg;alghslghslgslghslghsalgs',
  //       isComplete: true,
  //       position: 0,
  //     },
  //     task2: {
  //       description: 'Other thing',
  //       isComplete: false,
  //       position: 3760746300,
  //     },
  //     task3: {
  //       description: 'Third things to do',
  //       isComplete: true,
  //       position: 1,
  //     },
  //     task4: {
  //       description: 'These are dynamic now',
  //       isComplete: false,
  //       position: 9,
  //     },
  //     task5: {
  //       description: 'boom boom position is 2',
  //       isComplete: true,
  //       position: 2,
  //     },
  //   },
  // },
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

    case CREATE_KEEP:
      return {
        ...state,
        [action.keepId]: action.keep,
      };

    case READ_KEEPS:
      return {
        ...action.keeps,
      };

    default:
      return state;
  }
};

export default keepsReducer;
