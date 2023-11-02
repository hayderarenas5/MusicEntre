import { useEffect, useState } from "react"
import { SearchIcon } from "../components/icons/Svgs"
import PrincipalLayouts from "../components/layouts/PrincipalLayouts"
import { axiosMusic } from "../utils/configAxios"
import PlaylistList from "../components/playlist/PlaylistList"

const Playlist = () => {

  const[playlists, setPlaylists]=useState([])

  useEffect(()=>{
    axiosMusic
    .get("/api/playlists/me")
        .then(({data})=>setPlaylists(data))
        .catch((err)=>console.log(err))
  },[])

  return (
    <PrincipalLayouts>
      <form className="bg-white/20 p-3 px-4 rounded-md flex items-center gap-4">
            <button>
              <SearchIcon />
            </button>
            <input className="bg-transparent outline-none flex-1" placeholder="Buscar" type="text" size={5} required autoComplete="off" name="query"/>
          </form>
          <PlaylistList playlists={playlists}/>
     </PrincipalLayouts>
  )
}

export default Playlist
