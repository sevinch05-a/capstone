const User= require('../models/user')

const fetchUsers=async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const fetchUserById= async  (req, res) => {
    try{
    const userId = req.params.id
    const userById = await User.findById(userId);
   // console.log(User)
    res.json({userById: userById});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }

};
const newUser = async (req, res) => {
    
       const name = req.body.name;
    
         const email = req.body.email;
   
         const password = req.body.password;
  
         const rating= req.body.rating;
    

    try {
        const user = await User.create({
            name: name,

             email: email,
   
             password: password,
     
             rating:rating,
        });

        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const updateUser= async (req, res) => {
   
      const name = req.body.name;
  
     const  email= req.body.email;
   
     const  password= req.body.password;

     const rating= req.body.rating;

    const userId = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(User,{
            name: name,

            email: email,
   
            password: password,
    
            rating:rating,
        }
        {
            new: true
        });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteUser= async (req, res) => {
    const UserId = req.params.id 
    try {
        await User.findByIdAndDelete(UserId)
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {fetchUsers,fetchUserById, newUser, updateUser, deleteUser};
