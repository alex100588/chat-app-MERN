import User from "../models/user.model.js";

export const getUsersForSidebar = async(req, res)=>{
    try {
        const logedInUserId = req.user._id
        const filteredUsers = await User.find({_id: {$ne:logedInUserId}}).select("-password")

        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log("Error in the getUsersForSidebar controller", error.message);
        res.status(500).json({error: "Internal server error"})
    }
    
}

export const getMessages = async (req, res) => {
    try {
      const { id: userToChatId } = req.params;
      const myId = req.user._id;
  
      const messages = await Message.find({
        $or: [
          { senderId: myId, receiverId: userToChatId },
          { senderId: userToChatId, receiverId: myId },
        ],
      });
  
      res.status(200).json(messages);
    } catch (error) {
      console.log("Error in getMessages controller: ", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };