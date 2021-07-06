const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');

const router = express.Router();

router.post(
  '',
  asyncHandler(async (req, res) => {
    return res.json({});
  })
);

router.get(
  '',
  asyncHandler(async (req, res) => {
    return res.json({});
  })
);

router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    return res.json({});
  })
);

module.exports = router;
