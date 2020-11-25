var express = require('express')
var router = express.Router()


router.get('/about', function (req, res) {
    res.send('about page')
})
router.get('/news', function (req, res) {
    res.send('news birds')
})

module.exports = router