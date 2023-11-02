import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addTrack, removeTrack } from "../../store/slices/playlistCart.slice"
import { AddIcon, MinusIcon, PlayIcon } from "../icons/Svgs"

const TrackCard = ({ deleteBtn ,track, showPlayBtn, showAddBtn, imageSize="base", showMinusBtn}) => {
    
    const dispatch=useDispatch()

    const handleAddTrack=()=>{
        dispatch(addTrack(track))
    }

    const handleRemoveTrack=()=>{
        dispatch(removeTrack(track.id))
    }

    const imageSizes={
        base:"w-[58px] h-[58px]",
        sm:"w-[48px] h-[48px]"
    }

  return (
    <article className="flex gap-4 items-center hover:bg-white/20 transition-colors rounded-md p-1">
        {/* imagen de la cancion */}
        <div className={`rounded-md overflow-hidden ${imageSizes[imageSize]}`}>
            <img src={track.album.images[2]?.url} alt="" />
        </div>
        {/* detalle de la cancion */}
        <div className="flex-1 text-sm grid gap-2 ">
            <Link to={`/tracks/${track.id}`} className="font-semibold line-clamp-1 hover:text-secondary transition-colors">{track.name}</Link>
            {/* <h5 className="text-slate-400 line-clamp-1">{}</h5> */}
            <ul className="flex gap-2">
                {
                    track?.artists.slice(0,2).map((artist, index, array)=>(
                        <li key={artist.id}>
                            <Link className="hover:text-secondary transition-colors line-clamp-1" to={`/artist/${artist.id}`}>{artist.name}{array.length -1!==index &&","}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        {/* botones */}
        <div className="flex gap-2 pr-1">
            {
                showPlayBtn &&(
                    <button><PlayIcon /></button>
                )
            }
            {
                showAddBtn &&(
                    <button onClick={handleAddTrack}><AddIcon /></button>
                )
            }
        </div>
        {
            showMinusBtn && (
                <button onClick={handleRemoveTrack}>
                    <MinusIcon />
                </button>
            )
        }
        {
            deleteBtn&& (<button onClick={()=>deleteBtn(track.id)}>
                <MinusIcon />
            </button>)
        }
        
    </article>
  )
}

export default TrackCard
