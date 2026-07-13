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


module.exports ={ createUsers , getUsers }