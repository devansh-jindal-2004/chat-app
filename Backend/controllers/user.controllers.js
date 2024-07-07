import Conversation from "../Models/conversation.model.js";
import mongoose from "mongoose";
import User from "../Models/user.model.js";

const { ObjectId } = mongoose.Types;

export const getUsersForSidebar = async (req, res) => {
    try {
        const userId = req.user._id;

        const conversations = await Conversation.find({
            participants: new ObjectId(userId)
        }).populate({
            path: 'participants',
            model: 'User',
            select: '-password'
        });

        let contacts = new Set();

        conversations.forEach(conversation => {
            conversation.participants.forEach(participant => {
                if (!participant._id.equals(userId)) {
                    contacts.add(JSON.stringify(participant)); // Convert to string for Set uniqueness
                }
            });
        });

        contacts = Array.from(contacts).map(contact => JSON.parse(contact)); // Convert back to objects
        res.status(200).json(contacts);
    } catch (error) {
        console.log("error in get users for sidebar controller", error.message);
        res.status(500).json({ error: "internal server error" });
    }
};

export const getUsersForSearch = async (req, res) => {
    try {
      const { name: userName } = req.params;
      const userId = req.user._id;
  
      const users = await User.find({
        $or: [
          { username: { $regex: userName, $options: 'i' } },
          { fullName: { $regex: userName, $options: 'i' } }
        ],
        _id: { $ne: userId }
      });
  
      res.status(200).json(users);
    } catch (error) {
      console.log("Error in getUsersForSearch controller:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  

