const router = require('express').Router()
const Story  = require('../models/Story')
const {
    ensureAuth,
    ensureGuest
}  = require('../middleware/auth')

// Login/Landing page

router.get('/', ensureGuest, (req,res)=>{
    res.render('login',{
        layout:'auth'
    });
})

// Dashboard 
router.get('/dashboard', ensureAuth, async (req,res) => {
    try {
        const stories = await Story.find({user: req.user.id}).lean()
        res.render('dashboard',{
            name: req.user.firstName,
            stories
        })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

module.exports = router