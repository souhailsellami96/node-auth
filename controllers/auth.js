const User = require("../models/User");

exports.register = (req,res,next) => {
    const {username, email, password} = req.body;
    try {
const user = await User.create({
    username,
    email,
    password,
    });

    res.status(201).json({
        success: true,
        user,
    });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.login = async (req,res,next) => {
    const { email,password } = req.body;
    if(!email || !paaword){
        res.status(400).json({ success: false,error: "Pleqse provide email or password" })

    }
    try{
        const user = await User.findOne({ email }).select("+password");
        if(!user){
            res.status(404).json({ success: false, error: "Invalid" })
        }
        const isMatch = await user.matchPassword(password);
    }catch(error){

    }
};

exports.forgotpassword = (req,res,next) => {
    res.send("Forgot Password Route");
};

exports.resetpassword = (req,res,next) => {
    res.send("Reset Pssword Route");
};