function SpotifySong({ id }) {
  return (
    <iframe
    style={{ borderRadius: "12px" }}
    src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`}
    width="100%"
    height="152"
    frameBorder="0"
    allowFullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
  )
}
export default SpotifySong