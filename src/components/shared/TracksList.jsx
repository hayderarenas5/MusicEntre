import TrackCard from "./TrackCard"

const TracksList = ({tracks}) => {
  return (
    <section className="grid gap-3 pt-6">
      {
        tracks?.map((track)=>(
            <TrackCard key={track.id} track={track} showAddBtn showPlayBtn/>
            ))
      }
    </section>
  )
}

export default TracksList
