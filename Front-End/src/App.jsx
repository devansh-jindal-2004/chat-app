import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import {Toaster} from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"
import ThemeSetting from "./components/Setting/ThemeSetting/ThemeSetting"
// import ProfileSetting from "./components/ProfileSetting/ProfileSetting"
// import Layout from "./components/Layout/Layout"

function App() {
  const {authUser} = useAuthContext()
  return (
    <>
      <div className=" h-screen flex items-center justify-center">
        <Routes>
        <Route path="/" element={!authUser?<Navigate to="/login" />:<Home />} />
        <Route path="/login" element={authUser?<Navigate to="/" />:<Login />}/>
        <Route path="/signup" element={authUser?<Navigate to="/" />:<SignUp />} />
        <Route path="/theme" element={authUser?< ThemeSetting/>:<SignUp />} />
       
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
