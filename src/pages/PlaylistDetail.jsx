import { useEffect, useRef, useState } from "react"
import { PencilIcon, SaveIcon, ShereIcon, TrashIcon } from "../components/icons/Svgs"
import PrincipalLayouts from "../components/layouts/PrincipalLayouts"
import { Link, useNavigate, useParams } from "react-router-dom"
import { axiosMusic } from "../utils/configAxios"
import TrackCard from "../components/shared/TrackCard"

const PlaylistDetail = () => {

  const [isShowFront, setIsShowFront]=useState(true)
  const [playlist, setPlaylist]= useState(null)
  const formRef =useRef(null)
  const navigate=useNavigate()
  const { id }=useParams()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data= {
      title: e.target.title.value,
      to: e.target.to.value,
      message: e.target.message.value,
    }
    axiosMusic
    .patch(`/api/playlists/${id}`, data)
    .then(()=>{
      alert("se Actualizo")
    })
    .catch((err)=>console.log(err))
  }

  const deletePlaylist=()=>{
  
    axiosMusic
    .delete(`api/playlists/${playlist.id}`)
    .then(()=>{
      alert("playlist eliminada")
      navigate("/playlists")
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    axiosMusic
      .get(`/api/playlists/${id}`)
      .then(({data})=>{
        setPlaylist(data)
      formRef.current.message.value=data.message
      formRef.current.title.value=data.title
      formRef.current.to.value=data.to
    })
      .catch((err)=>console.log(err))
  },[])

  const deleteTrack=(idTrack)=>{
    axiosMusic
    .delete(`/api/playlists/${playlist.id}/tracks/${idTrack}`)
    .then(()=>{
      const playlistCopy = structuredClone(playlist)
      playlistCopy.tracks=playlistCopy.tracks.filter((track)=>track.id!== idTrack)
      setPlaylist(playlistCopy)
    })
    .catch((err)=>console.log(err))
  }

  return (
    <PrincipalLayouts>
       <form onSubmit={handleSubmit} ref={formRef} className="top-24 uppercase grid rounded-md justify-center font-semibold bordergap-1 transition-all">
        <div className={`relative cassette ${isShowFront ? "front" : "back"}`}>
            <div className="front">
                {/* Frontal */}
                <img src="/images/cassette.png" alt="" />
                <div className="bg-white flex p-1 items-center rounded-md w-[198px] absolute top-[15px] left-[20px] gap-1 text-sm">
                    <input className="bg-transparent flex-1 outline-none text-black " placeholder="Título" id="title" type="text" size={15}/>
                    <label htmlFor="title">
                        <PencilIcon />
                    </label>
                </div>
                    <button type="submit" className="absolute bottom-3 left-4 ">
                      <SaveIcon />
                    </button>
                    <button onClick={deletePlaylist} type="button" className="absolute bottom-3 left-[60px] border-2 rounded-full p-[3px]">
                      <TrashIcon />
                    </button>
                    <Link to={`/playlists/public/:${playlist?.id}`} type="button" className="absolute bottom-3 right-4 ">
                      <ShereIcon />
                    </Link>
            </div>
            <div className="absolute top-0 back">
                {/* Trasera */}
                <img src="/images/cassette.png" alt="" />
                <div className="bg-white flex p-1 items-center rounded-md w-[198px] absolute top-[15px] left-[20px] gap-1 text-sm">
                    <input className="bg-transparent flex-1 outline-none text-black " placeholder="Destinatario" id="to" type="text" size={15}/>
                    <label htmlFor="to">
                        <PencilIcon />
                    </label>
                </div>
                <div className="bg-white flex p-1 items-center rounded-md w-[198px] absolute top-[50px] left-[20px] gap-1 text-sm">
                    <textarea name="message" rows={4} className="outline-none text-black resize-none" placeholder="Mensaje"/>
                </div>
            </div>
        </div>

        <button type="button" className="border-2 border-white uppercase p-2 px-4 rounded-full max-w-max mx-auto hover:text-secondary hover:border-secondary transition-colors text-sm" onClick={()=>setIsShowFront(!isShowFront)}>{isShowFront? "Lado A" : "Lado B"}</button>

    </form>
    <section className="mt-6">
      {
        playlist?.tracks.map((track)=><TrackCard key={track.id} track={track} deleteBtn={deleteTrack}/>)
      }
    </section>

    </PrincipalLayouts>
  )
}

export default PlaylistDetail
