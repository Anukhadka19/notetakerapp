const router = require('express').Router();

// Import our modular routers for /notes
const notesRouter = require('./api/notes');



router.use('/api/notes', notesRouter);

// Export data
module.exports = router;