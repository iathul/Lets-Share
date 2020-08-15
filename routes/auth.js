const router   = require('express').Router()
const passport = require('passport')

// Todo Read Docs

// Auth with Google 

router.get('/google', passport.authenticate('google', { scope: ['profile']}))

// google auth callback
router.get('/google/callback',
passport.authenticate('google', {failureRedirect: '/'}),
(req,res) => {
    res.redirect('/dashboard')
})

router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/')
})

module.exports = router