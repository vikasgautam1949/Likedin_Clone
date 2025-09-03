import User from "../models/user.model.js";
export const getCurrentUser = async (req, res) => {
  try{
    let id= req.user.id;
    console.log(id);
    const user = await User.findById(req.user.id).select("-password -__v");
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
   return res.status(200).json( user );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};