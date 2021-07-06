const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');

const router = express.Router();

router.post(
  '',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { id } = req.user;
    console.log(id);
    return res.json({ message: 'Test new keeps post' });
  })
);

router.get(
  '',
  asyncHandler(async (req, res) => {
    return res.json({ message: 'Test a keeps get' });
  })
);

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    return res.json({ message: 'Test a keeps delete' });
  })
);

module.exports = router;
