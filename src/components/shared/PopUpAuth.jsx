import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logOut } from "../../store/slices/user.slice"
import { LogOutIcon, NavPlayIcon } from "../icons/Svgs"

const PopUpAuth = ({isShowAuth}) => {
    

    const dispatch= useDispatch()

    const handleLogOut=()=>dispatch(logOut())
  return (
    <nav className={`fixed top-24 bg-primary-light uppercase grid p-4 rounded-md justify-start font-semibold border border-secondary gap-1 ${isShowAuth? "right-10": "-right-full"} transition-all`}>
        <Link className="flex gap-2 hover:text-[#3E14B5] hover:font-semibold items-center transition-colors group " to="/playlists"><NavPlayIcon />Mis grabaciones</Link>

        <button onClick={handleLogOut} className="uppercase flex gap-2 hover:text-[#3E14B5] hover:font-semibold items-center transition-colors group"><LogOutIcon /> Cerrar sesión</button>
    </nav>
  )
}

export default PopUpAuth
