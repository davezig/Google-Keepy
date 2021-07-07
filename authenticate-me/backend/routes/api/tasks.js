const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');

const router = express.Router();

router.post(
  '',
  asyncHandler(async (req, res) => {
    return res.json({ message: 'Test new task post' });
  })
);

router.patch(
  '/:id',
  asyncHandler(async (req, res) => {
    return res.json({ message: 'Test is a task patch' });
  })
);

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    return res.json({ message: 'Test is a task delete' });
  })
);

module.exports = router;
