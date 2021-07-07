const express = require('express');
const asyncHandler = require('express-async-handler');

const { Task } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// POST localhost:5000/api/tasks
router.post(
  '',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { tasks } = req.body;
    const newTasks = Object.assign(
      {},
      ...(await Task.bulkCreate(tasks)).map((task) => {
        const { description, isComplete, position } = task;
        return {
          [task.id]: {
            description,
            isComplete,
            position,
          },
        };
      })
    );

    return res.json({ count: newTasks.length, tasks: newTasks });
  })
);

// PATCH localhost:5000/api/tasks/:id
router.patch(
  '/:id',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const task = await Task.update(
      { [data.column]: data.value },
      { where: { id }, returning: true }
    );
    return res.json({ count: task[0], tasks: task[1] });
  })
);

// DELETE localhost:5000/api/tasks/:id
router.delete(
  '/:id',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const task = await Task.destroy({ where: { id } });
    return res.json(
      {
        status: task ? 'Successfully deleted' : 'Nothing found',
      },
      task ? 200 : 406
    );
  })
);

module.exports = router;
