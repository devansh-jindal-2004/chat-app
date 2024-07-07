import { create } from "zustand";

const useMessage = create((set)=> ({
  messages: [],
  setMessages: (messages) => set({ messages }),
}))

export default useMessage