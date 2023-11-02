import { Link, useParams } from "react-router-dom"
import PrincipalLayouts from "../components/layouts/PrincipalLayouts"
import { useEffect, useState } from "react"
import { axiosMusic } from "../utils/configAxios"
import TrackCard from "../components/shared/TrackCard"

const TrackDetail = () => {

  const [track, setTrack]=useState(null)

  const {id}= useParams()

  useEffect(()=>{
    axiosMusic
    .get(`/api/tracks/${id}`)
    .then(({data})=>setTrack(data))
    .catch((err)=>console.log(err))
  },[id])

  return (
    <PrincipalLayouts>
      <Link className="text-secondary" to={-1}>{"<"}Atras</Link>
      <header className="grid gap-4 mb-8 sm:grid-cols-2 sm: items-center ">
        <div>
          <img className="block mx-auto rounded-2xl" src={track?.album.images[1].url} alt="" />
        </div>
          <ul className="grid gap-1">
            <li>
              <h3 className="font-semibold">{track?.name}</h3>
            </li>
            <li>
              <ul className="flex gap-2">
                  {
                      track?.artists.slice(0,2).map((artist, index, array)=>(
                          <li key={artist.id}>
                              <Link className="hover:text-secondary transition-colors line-clamp-1 text-slate-400" to={`/artist/${artist.id}`}>{artist.name}{array.length -1!==index &&","}</Link>
                          </li>
                      ))
                  }
              </ul>
            </li>
            <li className="text-slate-400">
              <span className="font-semibold text-white">Album:</span> {track?.album.name}
            </li>
            <li className="text-slate-400">
              <span className="font-semibold text-white">fecha:</span> {track?.album.release_date}
            </li>
          </ul>
      </header>
      <section> 
        <h4 className="text-base font-semibold my-4 uppercase">Recomendaciones</h4>
        <div>
          {
            track?.relatedSongs.map((relatedTrack)=>(
              <TrackCard key={relatedTrack.id} track={relatedTrack} showAddBtn/>
            ))
          }
        </div>
      </section>
    </PrincipalLayouts>
  )
}

export default TrackDetail
