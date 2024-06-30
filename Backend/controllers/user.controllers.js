import Conversation from "../Models/conversation.model.js"
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

export const getUsersForSidebar = async(req, res) => {
 try {
    const userId = req.user._id
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
                contacts.add(participant);
            }
        });
    });
    contacts = Array.from(contacts)
    res.status(200).json(contacts)
 } catch (error) {
    console.log("error in get users for sidebar controller", error.message)
    res.status(500).json({error: "internal server error"})
 }    
}