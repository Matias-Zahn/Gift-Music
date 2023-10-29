import TrackCard from "./TrackCard"

function TracksList({ tracks }) {
  return (
    <section className="grid gap-5 mt-6">
        {
            tracks.map((track) => <TrackCard track={track} key={track.id} />)
        }
    </section>
  )
}
export default TracksList