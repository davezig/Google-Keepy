const express = require('express');
const asyncHandler = require('express-async-handler');

const { Keep, Task } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// POST localhost:5000/api/keeps
router.post(
  '',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { title } = req.body;
    const { id: userId } = req.user;

    const keep = await Keep.create({
      title,
      userId,
    });
    return res.json({ keep }, 200);
  })
);

// GET localhost:5000/api/keeps
router.get(
  '',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { id: userId } = req.user;
    const keeps = Object.assign(
      {},
      ...(
        await Keep.findAll({
          where: { userId },
          include: [{ model: Task }],
        })
      ).map((keep) => {
        return {
          [keep.id]: {
            title: keep.title,
            tasks: Object.assign(
              {},
              ...keep.Tasks.map((task) => {
                const { description, isComplete, position } = task;
                return {
                  [task.id]: {
                    description,
                    isComplete,
                    position,
                  },
                };
              })
            ),
          },
        };
      })
    );
    return res.json({ count: keeps.length, keeps });
  })
);

// DELETE localhost:5000/api/keeps/:id
router.delete(
  '/:id',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { id: userId } = req.user;

    const { id } = req.params;
    const keep = await Keep.destroy({ where: { id, userId } });
    return res.json(
      {
        status: keep ? 'Successfully deleted' : 'Nothing found',
      },
      task ? 200 : 406
    );
  })
);

module.exports = router;
