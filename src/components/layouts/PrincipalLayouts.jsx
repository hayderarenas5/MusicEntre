import { useEffect, useState } from "react"
import { PlaylistIcon } from "../icons/Svgs"
import PopUpAuth from "../shared/PopUpAuth"
import PopUpPlaylist from "../shared/PopUpPlaylist"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const PrincipalLayouts = ({children}) => {
  const [isShowAuth, setIsShowAuth]=useState(false)
  const [isShowPlaylist, setIsShowPlaylist]=useState(false)

 const tracks=useSelector((store)=>store.playlisCart.tracks)
 
  useEffect(()=>{
    if (isShowPlaylist) {
      if(isShowAuth) setIsShowAuth (false)
    }
  },[isShowPlaylist])

  useEffect(()=>{
    if (isShowAuth) {
      if(isShowPlaylist) setIsShowPlaylist (false)
    }
  },[isShowAuth])

  return (
    <section className="bg-dark text-white font-urbanist h-screen grid bg-[url(/images/bg-mobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/images/bg-desktop.png)] transition-all grid-rows-[auto_1fr]">
        <header className="bg-primary-dark flex justify-between p-3 px-4 uppercase items-center">
        <Link to="/"><h1 className="font-semibold text-lg">Gift Music</h1></Link>

        <div className="flex gap-2">

          <button onClick={()=>setIsShowAuth(!isShowAuth)} className={`uppercase p-2 px-4 border border-secondary rounded-full font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base ${isShowAuth && "bg-primary-light"}`}>Mi cuenta</button>
          <button onClick={()=>setIsShowPlaylist(!isShowPlaylist)} className={`uppercase p-2 px-3 border border-secondary rounded-full font-semibold hover:bg-primary-light transition-all flex items-center gap-2 ${isShowPlaylist && "bg-primary-light"}`}><PlaylistIcon /><span className="hidden sm:inline">Grabando </span>{tracks.length} </button>
        </div>
      </header>
      <section className="py-14 px-4 overflow-y-auto">
        <main className="w-[min(520px,_100%)] mx-auto bg-primary-dark py-8 px-6 sm:px-14 rounded-3xl">
            {children}
        </main>
      </section>
      {/* Seccion popus */}
      <PopUpAuth isShowAuth={isShowAuth}/>
      <PopUpPlaylist isShowPlaylist={isShowPlaylist}/>
    </section>
  )
}

export default PrincipalLayouts
