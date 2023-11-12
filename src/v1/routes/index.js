var router = require('express').Router()

router.use('/test', (req, res) => {
    res.status(201).json({
        'message': "Successfully running"
    })
})
router.use('/boards', require('./board'))
router.use('/boards/:boardId/sections', require('./section'))
router.use('/boards/:boardId/tasks', require('./task'))

module.exports = router;
