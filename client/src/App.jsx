import {BrowserRouter,  Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SingIn from "./pages/SingIn"
import SingUp from "./pages/SingUp"
import Header from "./components/Header"


const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/SingIn" element={<SingIn />} />
    <Route path="/SingUp" element={<SingUp />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
