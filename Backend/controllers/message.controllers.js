import Conversation from "../Models/conversation.model.js"
import Message from "../Models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const userId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [userId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [userId, receiverId],
                messages: []
            });
        }

        const newMessage = await new Message({
            senderId: userId,
            receiverId,
            message
        });

        if (newMessage) {
           conversation.messages.push(newMessage._id)
        }

        await newMessage.save();
        await conversation.save();

        res.status(200).json(newMessage);
    } catch (error) {
        console.log("error while sending message", error.message);
        res.status(500).json({ error: "internal server error" });
    }
};



export const getmessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages");


        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        return res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getmessage controller:", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};

