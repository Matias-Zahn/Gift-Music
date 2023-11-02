function ProgressBar({ rating }) {
    const fullStars = Math.floor((rating / 100) * 5);
    return (
      <div className="flex items-center space-x-1">
        {Array(5)
          .fill()
          .map((_, index) => (
            <svg key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill={index < fullStars ? 'white' : 'none'}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
          ))}
      </div>
    );
}

export default ProgressBar;
