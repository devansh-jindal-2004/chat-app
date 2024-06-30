import Conversation from "../Models/conversation.model.js"
import Message from "../Models/message.model.js"

export const sendMessage = async(req, res)=> {
    try {
        const { message } = req.body;
        const {id: receiverId} = req.params;
        const userId = req.user._id;

        const conversation =await Conversation.findOne({
            participants: {$all: [userId, receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [userId, receiverId]
            })
        }

        const newmessage = await new Message({
            senderId: userId,
            receiverId,
            message
        })

        if(newmessage){
            conversation.message.push(newmessage._id)
        }

        await Promise.all(
            newmessage.save(),
            conversation.save()
        )


        res.status(200).json(newmessage);

    } catch (error) {
        console.log("error while sending message", error.message)
        res.status(500).json({error: "internal server error"})
    }
}


export const getmessage = async(req, res) => {
    try {
        
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages")

        if(!conversation){
            res.status(200).json([])
        }

        const message = conversation.message

        res.status(200).json(message)
        
    } catch (error) {
        console.log("error in getmessage controller", error.message)
        res.status(500).json({error: "internal server error"})
    }
}