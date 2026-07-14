const { model } = require('mongoose');
const User = require('../MODEL/user');

const createUsers = async (req,res)=>{
    const {firstName, lastName, username, password} = req.body;
    const createdUser = await User.create({firstName:firstName, lastName:lastName, username:username, password:password});
    res.send(createdUser);
};

const getUsers = async (req,res)=>{
    const data = await User.find({}); // has to be an object. each user is stored in an object
    res.send(data);
}

const getUser = async (req, res)=>{
    const singleUser = await User.findById(req.params.id);
    res.send(singleUser);
}

const deleteUser = async (req,res)=>{
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    console.log("User has been deleted");

    res.status(200).json({
        success: true,
        message: "User Deleted"
    }); 
}

const updateUser = async (req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const updatedUser = await User.findByIdAndUpdate(id,body, {new:true});
    res.send(updatedUser);
}



module.exports ={ createUsers , getUsers, getUser, deleteUser, updateUser};