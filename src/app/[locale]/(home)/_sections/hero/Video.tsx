const Video = () => {
  return (
    <video
      autoPlay
      className="absolute h-full max-w-none lg:w-[100vw] lg:h-auto lg:left-auto md:left-[-60%] left-[-90%]"
      loop
      muted
      poster="/images/sunset-placeholder.png"
      preload="auto"
    >
      <source src="/videos/sunset.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
