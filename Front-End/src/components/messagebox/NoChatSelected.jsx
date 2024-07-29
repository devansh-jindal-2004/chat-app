import { TiMessage } from "react-icons/ti"
import { useAuthContext } from "../../context/AuthContext.jsx"
import { useState } from "react"
import Setting from "../Setting/Setting.jsx"
const NoChatSelected = () => {
  const { authUser } = useAuthContext()
  const [open, setOpen] = useState(false);
  const handleMenuBtn = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className='flex items-center justify-center w-full h-full bg-[#708871]'>
      <div>
        <button onClick={handleMenuBtn} className=' text-[#DFD0B8]  absolute right-4 text-xl md:top-3 top-4 md:right-6 md:text-3xl'><i className="fa-solid fa-gear"></i>
        </button>
      </div>
      {open ? <Setting /> : null}
      <div className="px-4 text-center sm:text-lg md:text-xl text-[#FEF3E2] font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} </p>
        <p>Select chat to start messaging</p>
        <TiMessage className=" text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )
}

export default NoChatSelected

