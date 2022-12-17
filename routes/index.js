const router = require('express').Router();

// Import our modular routers for /notes
const notesRouter = require('./notes');



router.use('/notes', notesRouter);

// Export data
module.exports = router;