const express = require('express');
const router = express.Router();
const gigRoutes = require('./gigs.route');
const userRoutes = require('./userRoute');
const authRoutes = require('./authRoute');

router.use('/gigs', gigRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes)

module.exports = router;