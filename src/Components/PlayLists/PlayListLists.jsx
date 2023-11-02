import PlaylistCard from "./PlaylistCard"

function PlayListLists({playLists}) {

    const heigth = 130 + (50 * playLists.length)

  return (
    <ul style={{height: heigth}} className="relative mt-8 grid place-items-center">
        {
            playLists.map((playlist, index) => <PlaylistCard key={playlist.id} index={index} playlist={playlist} />)
        }
    </ul>
  )
}
export default PlayListLists