const express = require('express');
const asyncHandler = require('express-async-handler');

const { Keep } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// POST localhost:5000/api/keeps
router.post(
  '',
  //   requireAuth,
  asyncHandler(async (req, res) => {
    const { title } = req.body;
    // const { id: userId } = req.user;
    const userId = 1;
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
  //   requireAuth,
  asyncHandler(async (req, res) => {
    // const { id: userId } = req.user;
    const userId = 1;
    const keeps = await Keep.findAll({ where: { userId } });
    return res.json({ count: keeps.length, keeps });
  })
);

// DELETE localhost:5000/api/keeps/:id
router.delete(
  '/:id',
  //   requireAuth,
  asyncHandler(async (req, res) => {
    //   const {id: userId} = req.user;
    const userId = 1;
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
