import { TiMessage } from "react-icons/ti"
import { useAuthContext } from "../../context/AuthContext.jsx"

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
    return(
      <div className='flex items-center justify-center w-full h-full bg-[#708871]'>
        <div className="px-4 text-center sm:text-lg md:text-xl text-[#FEF3E2] font-semibold flex flex-col items-center gap-2">
            <p>Welcome 👋 {authUser.fullName} </p>
            <p>Select chat to start messaging</p>
            <TiMessage className=" text-3xl md:text-6xl text-center" />
        </div>
      </div>
    )
  }
  
  export default NoChatSelected
  
