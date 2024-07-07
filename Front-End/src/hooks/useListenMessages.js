import { useEffect } from "react"
import {useSocketContext} from "../context/SocketContext"
import useMessage from "../store/useMessage"

const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages, setMessages} = useMessage()

  useEffect(()=> {
    socket?.on("newMessage",(newMessage)=> {
        newMessage.shouldShake = true
        setMessages([...messages,newMessage])

        return ()=> socket.off("newMessage")
    })
  },[socket, setMessages, messages])

}

export default useListenMessages