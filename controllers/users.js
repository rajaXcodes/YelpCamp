const { model } = require("mongoose");
const User = require('../models/user');

module.exports.renderRegisterForm = (req,res)=>{
    res.render('users/register');
}

module.exports.register = async(req,res)=>{
    try{
        const {email,username,password} = req.body;
        const user = new User({email,username});
        const newUser = await User.register(user,password);
        //help not to login again after registering
        req.login(newUser,function(err){
            if(err) return next(err);
            req.flash('success','Welcome to the Yelpcamp');
            return res.redirect('/campgrounds');
        })
    }catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }
}

module.exports.renderLoginForm = (req,res)=>{
    res.render('users/login');
}

module.exports.login = (req,res)=>{
    req.flash('success','Welcome back!');
    const redirectUrl = res.locals.returnTo || '/campgrounds';
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
}