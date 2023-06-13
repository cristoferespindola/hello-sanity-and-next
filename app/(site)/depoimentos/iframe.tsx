const YouTubeVideo = ({ videoId }: { videoId: string }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="500"
        height="282"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};
export default YouTubeVideo;
