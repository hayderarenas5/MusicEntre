import { useEffect, useState } from "react"
import { SearchIcon } from "../components/icons/Svgs"
import PrincipalLayouts from "../components/layouts/PrincipalLayouts"
import TracksList from "../components/shared/tracksList"
import { axiosMusic } from "../utils/configAxios"

const Home = () => {

  const [tracksRecommendations, setTracksRecommendations] = useState([])
  
  const [searchTracks, setSearchTracks] = useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    const query= formData.get("query")
    const limit= formData.get("limit")

    axiosMusic
    .get(`/api/tracks?limit=${limit}&q=${query}`)
    .then(({data})=>setSearchTracks(data.tracks.items))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=reggaeton,reggae")
      .then(({data})=>setTracksRecommendations(data.tracks))
      .catch((err)=>console.log(err))
  },[])

  return (
      <PrincipalLayouts>
          <form onSubmit={handleSubmit} className="bg-white/20 p-3 px-4 rounded-md flex items-center gap-4">
            <button>
              <SearchIcon />
            </button>
            <input className="bg-transparent outline-none flex-1" placeholder="Buscar" type="text" size={5} required autoComplete="off" name="query"/>
            <select name="limit" className="bg-transparent [&>option]:text-black outline-none">
              <option>5</option>
              <option>7</option>
              <option>10</option>
              <option>12</option>
            </select>
          </form>
          <TracksList tracks={searchTracks.length===0 ? tracksRecommendations : searchTracks}/>
        </PrincipalLayouts>
  )
}

export default Home
